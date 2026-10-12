const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const STUDIO_DIR = __dirname;
const ROOT_DIR = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT_DIR, 'out');
const PRODUCTION_DIR = path.join(ROOT_DIR, 'production');

const CREDENTIALS_DIR = path.join(STUDIO_DIR, 'credentials');
const CREDENTIALS_FILE = path.join(STUDIO_DIR, 'credentials.json');
const TOKENS_DIR = path.join(STUDIO_DIR, 'tokens');
const CHANNELS_FILE = path.join(STUDIO_DIR, 'channels.json');
const UPLOADS_FILE = path.join(STUDIO_DIR, 'uploads.json');
const METADATA_FILE = path.join(STUDIO_DIR, 'metadata.json');

const RIGHTCLIPS_STUDIO_DIR = '/home/phyroosh/TopProducts/RightClips/studio';

function ensureDirs() {
  const dirs = [OUT_DIR, PRODUCTION_DIR, CREDENTIALS_DIR, TOKENS_DIR];
  for (const d of dirs) {
    if (!fs.existsSync(d)) {
      try {
        fs.mkdirSync(d, { recursive: true });
      } catch (e) {}
    }
  }
}

// -------------------------------------------------------------------
// 1. Google Cloud Console Credentials (client_secrets JSONs)
// -------------------------------------------------------------------

function getCredentialsRegistry() {
  ensureDirs();
  if (fs.existsSync(CREDENTIALS_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(CREDENTIALS_FILE, 'utf-8'));
      if (data && Array.isArray(data.projects)) return data;
    } catch (e) {
      console.error('Error reading credentials.json:', e);
    }
  }
  return { projects: [], activeProjectId: null };
}

function saveCredentialsRegistry(registry) {
  try {
    fs.writeFileSync(CREDENTIALS_FILE, JSON.stringify(registry, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error saving credentials.json:', e);
  }
}

function getCredentialData(credentialId = null) {
  ensureDirs();
  const registry = getCredentialsRegistry();
  const targetId = credentialId || registry.activeProjectId || (registry.projects[0] ? registry.projects[0].id : null);

  if (targetId) {
    const proj = registry.projects.find((p) => p.id === targetId);
    if (proj) {
      const filePath = path.join(STUDIO_DIR, proj.filename);
      if (fs.existsSync(filePath)) {
        try {
          const content = fs.readFileSync(filePath, 'utf-8');
          const parsed = JSON.parse(content);
          return { credentialId: proj.id, name: proj.name, credentials: parsed };
        } catch (e) {
          console.error(`Failed to parse credential file ${filePath}:`, e);
        }
      }
    }
  }
  return null;
}

function addCredential({ name, jsonContent }) {
  ensureDirs();
  let parsed;
  if (typeof jsonContent === 'string') {
    try {
      parsed = JSON.parse(jsonContent);
    } catch (e) {
      throw new Error('Invalid JSON: ' + e.message);
    }
  } else {
    parsed = jsonContent;
  }

  const installed = parsed.installed || parsed.web;
  if (!installed || !installed.client_id || !installed.client_secret) {
    throw new Error('Invalid Google credentials format! Missing "installed" or "web" block with client_id and client_secret.');
  }

  const registry = getCredentialsRegistry();
  const id = 'gcp_' + Date.now().toString(36);
  const safeName = (name || installed.project_id || `Google Cloud Project (${registry.projects.length + 1})`).trim();
  const fileName = `credentials/${id}.json`;
  const destPath = path.join(STUDIO_DIR, fileName);

  fs.writeFileSync(destPath, JSON.stringify(parsed, null, 2), 'utf-8');

  const projectInfo = {
    id,
    name: safeName,
    clientId: installed.client_id,
    projectId: installed.project_id || id,
    filename: fileName,
    createdAt: new Date().toISOString(),
  };

  registry.projects.push(projectInfo);
  if (!registry.activeProjectId) {
    registry.activeProjectId = id;
  }
  saveCredentialsRegistry(registry);

  return projectInfo;
}

function deleteCredential(credentialId) {
  const registry = getCredentialsRegistry();
  const proj = registry.projects.find((p) => p.id === credentialId);
  if (!proj) return { success: false, error: 'Credential not found' };

  registry.projects = registry.projects.filter((p) => p.id !== credentialId);
  const filePath = path.join(STUDIO_DIR, proj.filename);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
    } catch (e) {}
  }

  if (registry.activeProjectId === credentialId) {
    registry.activeProjectId = registry.projects.length > 0 ? registry.projects[0].id : null;
  }
  saveCredentialsRegistry(registry);

  return { success: true, activeProjectId: registry.activeProjectId };
}

// -------------------------------------------------------------------
// 2. YouTube Channels Registry & OAuth Tokens
// -------------------------------------------------------------------

function getChannelsRegistry() {
  ensureDirs();
  if (fs.existsSync(CHANNELS_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(CHANNELS_FILE, 'utf-8'));
      if (data && Array.isArray(data.channels)) return data;
    } catch (e) {
      console.error('Error reading channels.json:', e);
    }
  }
  return { channels: [], activeChannelId: null };
}

function saveChannelsRegistry(registry) {
  try {
    fs.writeFileSync(CHANNELS_FILE, JSON.stringify(registry, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error saving channels.json:', e);
  }
}

function getOAuth2ClientForCredential(credentialId = null, port = 4002) {
  const credObj = getCredentialData(credentialId);
  if (!credObj) {
    throw new Error('No Google Cloud credentials found. Please add client_secrets.json or import from RightClips.');
  }

  const installed = credObj.credentials.installed || credObj.credentials.web;
  const redirectUri = `http://localhost:${port}/oauth2callback`;
  return {
    oauth2Client: new google.auth.OAuth2(installed.client_id, installed.client_secret, redirectUri),
    credentialId: credObj.credentialId,
    credentialName: credObj.name,
  };
}

function getOAuth2ClientForChannel(channelId = null, port = 4002) {
  ensureDirs();
  const registry = getChannelsRegistry();
  const targetId = channelId || registry.activeChannelId;

  if (!targetId || registry.channels.length === 0) {
    return null;
  }

  const channel = registry.channels.find((c) => c.channelId === targetId);
  if (!channel) {
    return null;
  }

  const credObj = getCredentialData(channel.credentialId);
  if (!credObj) {
    throw new Error(`Google Cloud credentials not found for channel ${channel.title}.`);
  }

  const installed = credObj.credentials.installed || credObj.credentials.web;
  const redirectUri = `http://localhost:${port}/oauth2callback`;
  const oauth2Client = new google.auth.OAuth2(installed.client_id, installed.client_secret, redirectUri);

  const tokenPath = path.join(STUDIO_DIR, channel.tokenFile);
  if (!fs.existsSync(tokenPath)) {
    return null;
  }

  try {
    const tokens = JSON.parse(fs.readFileSync(tokenPath, 'utf-8'));
    oauth2Client.setCredentials(tokens);

    // Save refreshed tokens automatically
    oauth2Client.on('tokens', (newTokens) => {
      const merged = { ...tokens, ...newTokens };
      try {
        fs.writeFileSync(tokenPath, JSON.stringify(merged, null, 2), 'utf-8');
      } catch (e) {}
    });

    return { oauth2Client, channel };
  } catch (e) {
    console.error(`Error loading tokens for channel ${channel.title}:`, e);
    return null;
  }
}

async function registerChannelFromOAuth({ code, credentialId = null, port = 4002 }) {
  ensureDirs();
  const { oauth2Client, credentialId: resolvedCredId } = getOAuth2ClientForCredential(credentialId, port);

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  // Fetch YouTube channel details
  const youtube = google.youtube({ version: 'v3', auth: oauth2Client });
  const response = await youtube.channels.list({
    part: ['snippet', 'statistics', 'contentDetails'],
    mine: true,
  });

  if (!response.data.items || response.data.items.length === 0) {
    throw new Error('No YouTube channel found associated with this Google account.');
  }

  const item = response.data.items[0];
  const channelId = item.id;
  const title = item.snippet.title;
  const customUrl = item.snippet.customUrl || `@${title.replace(/\s+/g, '').toLowerCase()}`;
  const avatar =
    item.snippet.thumbnails?.high?.url ||
    item.snippet.thumbnails?.medium?.url ||
    item.snippet.thumbnails?.default?.url ||
    null;

  const tokenFileName = `tokens/yt_${channelId}.json`;
  const tokenFilePath = path.join(STUDIO_DIR, tokenFileName);
  fs.writeFileSync(tokenFilePath, JSON.stringify(tokens, null, 2), 'utf-8');

  const registry = getChannelsRegistry();
  const idx = registry.channels.findIndex((c) => c.channelId === channelId);

  const channelRecord = {
    channelId,
    title,
    customUrl,
    avatar,
    subscriberCount: item.statistics?.subscriberCount || '0',
    videoCount: item.statistics?.videoCount || '0',
    uploadsPlaylistId: item.contentDetails?.relatedPlaylists?.uploads || null,
    credentialId: resolvedCredId,
    tokenFile: tokenFileName,
    connectedAt: new Date().toISOString(),
  };

  if (idx >= 0) {
    registry.channels[idx] = channelRecord;
  } else {
    registry.channels.push(channelRecord);
  }

  registry.activeChannelId = channelId;
  saveChannelsRegistry(registry);

  return channelRecord;
}

function switchActiveChannel(channelId) {
  const registry = getChannelsRegistry();
  const found = registry.channels.find((c) => c.channelId === channelId);
  if (!found) {
    return { success: false, error: 'Channel not found in registry' };
  }

  registry.activeChannelId = found.channelId;
  saveChannelsRegistry(registry);
  return { success: true, activeChannel: found };
}

function disconnectChannel(channelId) {
  const registry = getChannelsRegistry();
  const found = registry.channels.find((c) => c.channelId === channelId);
  if (!found) return { success: true };

  registry.channels = registry.channels.filter((c) => c.channelId !== channelId);
  const tokPath = path.join(STUDIO_DIR, found.tokenFile);
  if (fs.existsSync(tokPath)) {
    try {
      fs.unlinkSync(tokPath);
    } catch (e) {}
  }

  if (registry.activeChannelId === channelId) {
    registry.activeChannelId = registry.channels.length > 0 ? registry.channels[0].channelId : null;
  }

  saveChannelsRegistry(registry);
  return { success: true, activeChannelId: registry.activeChannelId };
}

async function refreshChannelDetails(channelId = null) {
  const clientObj = getOAuth2ClientForChannel(channelId);
  if (!clientObj) return null;

  try {
    const youtube = google.youtube({ version: 'v3', auth: clientObj.oauth2Client });
    const response = await youtube.channels.list({
      part: ['snippet', 'statistics', 'contentDetails'],
      mine: true,
    });

    if (response.data.items && response.data.items.length > 0) {
      const item = response.data.items[0];
      const registry = getChannelsRegistry();
      const idx = registry.channels.findIndex((c) => c.channelId === item.id);
      if (idx >= 0) {
        registry.channels[idx].title = item.snippet.title;
        registry.channels[idx].customUrl = item.snippet.customUrl || registry.channels[idx].customUrl;
        registry.channels[idx].avatar =
          item.snippet.thumbnails?.high?.url ||
          item.snippet.thumbnails?.medium?.url ||
          item.snippet.thumbnails?.default?.url ||
          registry.channels[idx].avatar;
        registry.channels[idx].subscriberCount = item.statistics?.subscriberCount || '0';
        registry.channels[idx].videoCount = item.statistics?.videoCount || '0';
        registry.channels[idx].uploadsPlaylistId = item.contentDetails?.relatedPlaylists?.uploads || null;
        saveChannelsRegistry(registry);
        return registry.channels[idx];
      }
    }
  } catch (e) {
    console.error(`Failed to refresh channel ${channelId}:`, e.message);
  }
  return clientObj.channel;
}

// -------------------------------------------------------------------
// 3. RightClips One-Click Importer
// -------------------------------------------------------------------

function importFromRightClips() {
  ensureDirs();
  const rcCredsFile = path.join(RIGHTCLIPS_STUDIO_DIR, 'credentials.json');
  const rcChannelsFile = path.join(RIGHTCLIPS_STUDIO_DIR, 'channels.json');

  if (!fs.existsSync(RIGHTCLIPS_STUDIO_DIR)) {
    return { success: false, error: 'RightClips directory not found at ' + RIGHTCLIPS_STUDIO_DIR };
  }

  let importedCredsCount = 0;
  let importedChannelsCount = 0;

  // 1. Copy credentials
  if (fs.existsSync(rcCredsFile)) {
    try {
      const rcCredsData = JSON.parse(fs.readFileSync(rcCredsFile, 'utf-8'));
      const localCreds = getCredentialsRegistry();

      for (const proj of rcCredsData.projects || []) {
        const rcProjPath = path.join(RIGHTCLIPS_STUDIO_DIR, proj.filename);
        if (fs.existsSync(rcProjPath)) {
          const content = fs.readFileSync(rcProjPath, 'utf-8');
          const destPath = path.join(STUDIO_DIR, proj.filename);
          fs.writeFileSync(destPath, content, 'utf-8');

          if (!localCreds.projects.some((p) => p.id === proj.id)) {
            localCreds.projects.push(proj);
            importedCredsCount++;
          }
        }
      }
      if (!localCreds.activeProjectId && rcCredsData.activeProjectId) {
        localCreds.activeProjectId = rcCredsData.activeProjectId;
      }
      saveCredentialsRegistry(localCreds);
    } catch (e) {
      console.error('Error importing RightClips credentials:', e);
    }
  }

  // 2. Copy channels & tokens
  if (fs.existsSync(rcChannelsFile)) {
    try {
      const rcChannelsData = JSON.parse(fs.readFileSync(rcChannelsFile, 'utf-8'));
      const localChannels = getChannelsRegistry();

      for (const ch of rcChannelsData.channels || []) {
        const rcTokenPath = path.join(RIGHTCLIPS_STUDIO_DIR, ch.tokenFile);
        if (fs.existsSync(rcTokenPath)) {
          const tokContent = fs.readFileSync(rcTokenPath, 'utf-8');
          const destTokPath = path.join(STUDIO_DIR, ch.tokenFile);
          fs.writeFileSync(destTokPath, tokContent, 'utf-8');

          const existingIdx = localChannels.channels.findIndex((c) => c.channelId === ch.channelId);
          if (existingIdx >= 0) {
            localChannels.channels[existingIdx] = ch;
          } else {
            localChannels.channels.push(ch);
            importedChannelsCount++;
          }
        }
      }

      if (!localChannels.activeChannelId && rcChannelsData.activeChannelId) {
        localChannels.activeChannelId = rcChannelsData.activeChannelId;
      } else if (!localChannels.activeChannelId && localChannels.channels.length > 0) {
        localChannels.activeChannelId = localChannels.channels[0].channelId;
      }

      saveChannelsRegistry(localChannels);
    } catch (e) {
      console.error('Error importing RightClips channels:', e);
    }
  }

  return {
    success: true,
    importedCredsCount,
    importedChannelsCount,
    channels: getChannelsRegistry().channels,
    activeChannelId: getChannelsRegistry().activeChannelId,
  };
}

// -------------------------------------------------------------------
// 4. Video, Thumbnail, and Caption Resolution
// -------------------------------------------------------------------

function resolveThumbnailPath(filename) {
  if (!filename) return null;
  const rawBase = filename.replace(/\.mp4$/i, '');
  const cleanBase = rawBase.replace(/_vertical$/i, '').replace(/_landscape$/i, '');

  const candidates = [
    `${rawBase}_still.png`,
    `${rawBase}.png`,
    `still_${rawBase}.png`,
    `${cleanBase}_still.png`,
    `${cleanBase}_vertical_still.png`,
    `${cleanBase}_still_vertical.png`,
    `${cleanBase}.png`,
    `preview_${cleanBase}.png`,
    `preview_title.png`,
    `still_landscape.png`,
    `still_vertical.png`,
  ];

  for (const cand of candidates) {
    const pOut = path.join(OUT_DIR, cand);
    if (fs.existsSync(pOut)) return pOut;
    const pProd = path.join(PRODUCTION_DIR, cand);
    if (fs.existsSync(pProd)) return pProd;
    const pRoot = path.join(ROOT_DIR, cand);
    if (fs.existsSync(pRoot)) return pRoot;
  }

  // Search any .png in out/ matching cleanBase
  try {
    if (fs.existsSync(OUT_DIR)) {
      const files = fs.readdirSync(OUT_DIR);
      const match = files.find((f) => f.endsWith('.png') && f.toLowerCase().includes(cleanBase.toLowerCase()));
      if (match) return path.join(OUT_DIR, match);
    }
  } catch (e) {}

  return null;
}

function resolveCaptionPath(filename) {
  if (!filename) return null;
  const rawBase = filename.replace(/\.mp4$/i, '');
  const cleanBase = rawBase.replace(/_vertical$/i, '').replace(/_landscape$/i, '');

  const candidates = [
    `${rawBase}.srt`,
    `${rawBase}.vtt`,
    `${cleanBase}.srt`,
    `${cleanBase}.vtt`,
    `captions.srt`,
    `captions.vtt`,
  ];

  for (const cand of candidates) {
    const pOut = path.join(OUT_DIR, cand);
    if (fs.existsSync(pOut)) return pOut;
    const pProd = path.join(PRODUCTION_DIR, cand);
    if (fs.existsSync(pProd)) return pProd;
  }
  return null;
}

// -------------------------------------------------------------------
// 5. Uploads and Metadata Records Persistence
// -------------------------------------------------------------------

function getUploadsRecord() {
  if (fs.existsSync(UPLOADS_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(UPLOADS_FILE, 'utf-8'));
    } catch (e) {
      console.error('Error reading uploads.json:', e);
    }
  }
  return {};
}

function saveUploadsRecord(record) {
  try {
    fs.writeFileSync(UPLOADS_FILE, JSON.stringify(record, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error saving uploads.json:', e);
  }
}

function getSavedMetadata() {
  ensureDirs();
  const merged = {};

  // Check studio/metadata.json
  if (fs.existsSync(METADATA_FILE)) {
    try {
      const meta = JSON.parse(fs.readFileSync(METADATA_FILE, 'utf-8'));
      Object.assign(merged, meta);
    } catch (e) {}
  }

  // Check production/metadata.json
  const prodMetaFile = path.join(PRODUCTION_DIR, 'metadata.json');
  if (fs.existsSync(prodMetaFile)) {
    try {
      const prodMeta = JSON.parse(fs.readFileSync(prodMetaFile, 'utf-8'));
      for (const [k, v] of Object.entries(prodMeta)) {
        if (!merged[k]) merged[k] = v;
      }
    } catch (e) {}
  }

  return merged;
}

function saveMetadataRecord(record) {
  ensureDirs();
  try {
    fs.writeFileSync(METADATA_FILE, JSON.stringify(record, null, 2), 'utf-8');
    const prodMetaFile = path.join(PRODUCTION_DIR, 'metadata.json');
    fs.writeFileSync(prodMetaFile, JSON.stringify(record, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error saving metadata.json:', e);
  }
}

module.exports = {
  STUDIO_DIR,
  ROOT_DIR,
  OUT_DIR,
  PRODUCTION_DIR,
  CREDENTIALS_DIR,
  CREDENTIALS_FILE,
  TOKENS_DIR,
  CHANNELS_FILE,
  UPLOADS_FILE,
  METADATA_FILE,

  ensureDirs,

  // Credentials
  getCredentialsRegistry,
  saveCredentialsRegistry,
  getCredentialData,
  addCredential,
  deleteCredential,

  // Channels
  getChannelsRegistry,
  saveChannelsRegistry,
  getOAuth2ClientForCredential,
  getOAuth2ClientForChannel,
  registerChannelFromOAuth,
  switchActiveChannel,
  disconnectChannel,
  refreshChannelDetails,

  // RightClips Importer
  importFromRightClips,

  // Resolution & Persistence
  resolveThumbnailPath,
  resolveCaptionPath,
  getUploadsRecord,
  saveUploadsRecord,
  getSavedMetadata,
  saveMetadataRecord,
};
