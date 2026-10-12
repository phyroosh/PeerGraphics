const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const ytManager = require('./youtube_manager');

const app = express();
const PORT = process.env.PORT || 4002;

// Middleware
app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// Static frontend
app.use(express.static(path.join(__dirname, 'public')));
app.use('/out', express.static(ytManager.OUT_DIR));

// Upload State Tracker
let activeUpload = {
  inProgress: false,
  progress: 0,
  stage: 'Idle',
  filename: null,
  result: null,
  error: null,
};

// Auto-import from RightClips on initial boot if local credentials or channels are empty
try {
  const currentCreds = ytManager.getCredentialsRegistry();
  const currentChannels = ytManager.getChannelsRegistry();
  if ((!currentCreds.projects || currentCreds.projects.length === 0) &&
      (!currentChannels.channels || currentChannels.channels.length === 0)) {
    console.log('🔄 First boot detected: Auto-importing credentials & channels from RightClips...');
    const impRes = ytManager.importFromRightClips();
    if (impRes.success) {
      console.log(`✅ Auto-imported ${impRes.importedCredsCount} credentials and ${impRes.importedChannelsCount} channels from RightClips!`);
    }
  }
} catch (e) {
  console.warn('⚠️ Auto-import note:', e.message);
}

// -------------------------------------------------------------------
// 1. Status & Auth Endpoints
// -------------------------------------------------------------------

app.get('/api/status', (req, res) => {
  res.json({
    name: 'PeerGraphics YouTube Studio',
    version: '1.0.0',
    port: PORT,
    activeUpload: { inProgress: activeUpload.inProgress, filename: activeUpload.filename },
  });
});

app.get('/api/auth-status', async (req, res) => {
  try {
    const reg = ytManager.getChannelsRegistry();
    const credReg = ytManager.getCredentialsRegistry();
    const activeChannel = reg.channels.find((c) => c.channelId === reg.activeChannelId) || reg.channels[0] || null;

    if (activeChannel) {
      // Refresh channel details in background
      ytManager.refreshChannelDetails(activeChannel.channelId).catch(() => {});

      return res.json({
        authenticated: true,
        channel: {
          channelId: activeChannel.channelId,
          title: activeChannel.title,
          customUrl: activeChannel.customUrl,
          avatar: activeChannel.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(activeChannel.title)}&background=10b981&color=fff`,
          subscriberCount: activeChannel.subscriberCount || '0',
          videoCount: activeChannel.videoCount || '0',
          connectedAt: activeChannel.connectedAt,
        },
        channels: reg.channels,
        activeChannelId: reg.activeChannelId,
        credentials: credReg.projects,
      });
    }

    res.json({
      authenticated: false,
      channel: null,
      channels: reg.channels,
      activeChannelId: null,
      credentials: credReg.projects,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/auth-url', (req, res) => {
  const { credentialId } = req.query;
  try {
    const { oauth2Client, credentialId: resolvedCredId } = ytManager.getOAuth2ClientForCredential(credentialId, PORT);
    const scopes = [
      'https://www.googleapis.com/auth/youtube.upload',
      'https://www.googleapis.com/auth/youtube.readonly',
      'https://www.googleapis.com/auth/youtube.force-ssl',
    ];

    const statePayload = Buffer.from(JSON.stringify({ credentialId: resolvedCredId })).toString('base64');
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope: scopes,
      state: statePayload,
    });

    res.json({ url, credentialId: resolvedCredId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/oauth2callback', async (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).send('Authorization code missing');
  }

  let credentialId = null;
  if (req.query.state) {
    try {
      const decoded = JSON.parse(Buffer.from(req.query.state, 'base64').toString('utf-8'));
      credentialId = decoded.credentialId;
    } catch (e) {}
  }

  try {
    const channel = await ytManager.registerChannelFromOAuth({
      code,
      credentialId,
      port: PORT,
    });

    const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(channel.title)}&background=10b981&color=fff`;

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>YouTube Channel Connected - PeerGraphics</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              margin: 0;
              background: #090d16;
              color: #f8fafc;
            }
            .card {
              background: #121826;
              padding: 40px;
              border-radius: 24px;
              text-align: center;
              box-shadow: 0 25px 60px rgba(0,0,0,0.6);
              border: 1px solid rgba(255,255,255,0.1);
              max-width: 420px;
              width: 90%;
            }
            .avatar {
              width: 80px;
              height: 80px;
              border-radius: 50%;
              margin: 0 auto 16px;
              overflow: hidden;
              border: 3px solid #10b981;
              box-shadow: 0 0 24px rgba(16,185,129,0.35);
            }
            .btn {
              background: #0284c7;
              color: white;
              padding: 12px 28px;
              border-radius: 12px;
              text-decoration: none;
              font-weight: bold;
              display: inline-block;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="avatar">
              <img src="${channel.avatar || fallbackAvatar}" style="width:100%; height:100%; object-fit:cover;" />
            </div>
            <h1 style="color:#10b981; margin:0 0 8px; font-size:22px;">✅ Channel Connected!</h1>
            <p style="font-size:18px; font-weight:bold; margin:0 0 4px;">${channel.title}</p>
            <p style="color:#38bdf8; font-family:monospace; margin:0 0 20px;">${channel.customUrl}</p>
            <p style="color:#94a3b8; font-size:14px;">Your YouTube channel is authorized and ready for 1-click video uploads in PeerGraphics.</p>
            <a href="/" class="btn">Return to PeerGraphics Studio</a>
          </div>
        </body>
      </html>
    `);
  } catch (err) {
    res.status(500).send(`Authentication failed: ${err.message}`);
  }
});

app.post('/api/switch-channel', (req, res) => {
  const { channelId } = req.body;
  if (!channelId) return res.status(400).json({ error: 'channelId required' });
  const result = ytManager.switchActiveChannel(channelId);
  res.json(result);
});

app.post('/api/disconnect-channel', (req, res) => {
  const { channelId } = req.body;
  if (!channelId) return res.status(400).json({ error: 'channelId required' });
  const result = ytManager.disconnectChannel(channelId);
  res.json(result);
});

app.post('/api/import-rightclips', (req, res) => {
  try {
    const result = ytManager.importFromRightClips();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/add-credential', (req, res) => {
  const { name, jsonContent } = req.body;
  if (!jsonContent) {
    return res.status(400).json({ error: 'client_secrets JSON content is required' });
  }
  try {
    const project = ytManager.addCredential({ name, jsonContent });
    res.json({ success: true, project });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/credential/:id', (req, res) => {
  const { id } = req.params;
  try {
    const result = ytManager.deleteCredential(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/channel-avatar/:channelId', (req, res) => {
  const { channelId } = req.params;
  const reg = ytManager.getChannelsRegistry();
  const channel = reg.channels.find((c) => c.channelId === channelId);
  const avatarUrl = channel?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(channel?.title || 'YouTube')}&background=0284c7&color=fff`;
  res.redirect(avatarUrl);
});

app.post('/api/generate-metadata-auto', (req, res) => {
  const { filename } = req.body;
  try {
    const savedMeta = ytManager.getSavedMetadata();
    const outDir = ytManager.OUT_DIR;
    let targets = [];

    if (filename) {
      targets = [filename];
    } else if (fs.existsSync(outDir)) {
      targets = fs.readdirSync(outDir).filter((f) => f.toLowerCase().endsWith('.mp4'));
    }

    if (targets.length === 0) {
      return res.status(400).json({ error: 'No video files found to generate metadata for' });
    }

    for (const f of targets) {
      const rawBase = f.replace(/\.mp4$/i, '');
      const cleanName = rawBase
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());

      savedMeta[f] = {
        topic: rawBase,
        title: `${cleanName} (The Secret Mechanism Explained) 🧠 #Shorts`,
        description: `Ever wonder how ${cleanName} actually works behind the scenes?\n\nMost people think it happens one way, but the real mechanism is completely counterintuitive.\n\nHere is what is happening step-by-step:\n1. The initial trigger creates an immediate feedback shift\n2. The underlying forces interact and cascade through the system\n3. The result stabilizes, giving you the phenomenon you see every day.\n\nKey Takeaway: When you understand the causal chain, you can predict what happens next.\n\nWhat part surprised you the most?\n\n#Shorts #Education #Science #Explanation #Physics #HowItWorks #DidYouKnow #Learning #PeerGraphics`,
        tags: [
          'Shorts',
          'Education',
          'Science',
          cleanName,
          'How It Works',
          'Explained',
          'Mechanism',
          'Scientific Explanation',
          'Mind Blowing',
          'Educational Short',
          'Learning',
          'PeerGraphics',
        ],
        categoryId: '27',
        privacyStatus: 'public',
        pinnedComment: `What part of ${cleanName} surprised you the most? Tell us your theory in the comments! 🧠👇`,
      };
    }

    ytManager.saveMetadataRecord(savedMeta);
    res.json({ success: true, count: targets.length, metadata: savedMeta });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// -------------------------------------------------------------------
// 2. Video Gallery & Metadata Endpoints
// -------------------------------------------------------------------

app.get('/api/videos', (req, res) => {
  try {
    const outDir = ytManager.OUT_DIR;
    ytManager.ensureDirs();

    let videoFiles = [];
    if (fs.existsSync(outDir)) {
      videoFiles = fs
        .readdirSync(outDir)
        .filter((f) => f.toLowerCase().endsWith('.mp4'));
    }

    const savedMetadata = ytManager.getSavedMetadata();
    const uploads = ytManager.getUploadsRecord();

    const videos = videoFiles.map((filename) => {
      const filePath = path.join(outDir, filename);
      const stats = fs.statSync(filePath);
      const rawBase = filename.replace(/\.mp4$/i, '');
      const cleanName = rawBase.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      const isVertical = filename.toLowerCase().includes('vert') || filename.toLowerCase().includes('short') || true;

      // Extract metadata or construct structured default
      const meta = savedMetadata[filename] || {
        topic: rawBase,
        title: `${cleanName} (Explained in 30s) 🧠 #Shorts`,
        description: `Ever wondered how ${cleanName} actually works?\n\nHere is the real mechanism explained simply.\n\nKey Takeaway: Understanding this changes how you see the entire concept.\n\n#Shorts #Education #Science #Explained #HowItWorks #PeerGraphics`,
        tags: ['Shorts', 'Education', 'Science', cleanName, 'How It Works', 'Explanation', 'PeerGraphics'],
        categoryId: '27',
        privacyStatus: 'public',
        pinnedComment: `What part of ${cleanName} surprised you most? Drop your thoughts below! 🧠👇`,
      };

      const uploadInfo = uploads[filename] || {};
      const uploaded = !!uploadInfo.uploaded;
      const thumbPath = ytManager.resolveThumbnailPath(filename);
      const hasThumb = !!(thumbPath && fs.existsSync(thumbPath));
      const captionPath = ytManager.resolveCaptionPath(filename);
      const hasCaptions = !!(captionPath && fs.existsSync(captionPath));

      return {
        filename,
        cleanName,
        sizeBytes: stats.size,
        sizeMb: (stats.size / (1024 * 1024)).toFixed(1),
        mtime: stats.mtime,
        isVertical,
        hasThumbnail: hasThumb,
        thumbnailUrl: hasThumb ? `/api/thumbnail/${filename}` : null,
        hasCaptions,
        captionPath: hasCaptions ? captionPath : null,
        metadata: meta,
        uploadInfo: {
          uploaded,
          videoId: uploadInfo.videoId || null,
          youtubeUrl: uploadInfo.youtubeUrl || null,
          publishedAt: uploadInfo.publishedAt || null,
          privacyStatus: uploadInfo.privacyStatus || null,
          isScheduled: !!uploadInfo.isScheduled,
          publishAt: uploadInfo.publishAt || null,
        },
      };
    });

    // Sort by modification time: newest first
    videos.sort((a, b) => new Date(b.mtime).getTime() - new Date(a.mtime).getTime());

    res.json({
      videos,
      totalCount: videos.length,
      uploadedCount: videos.filter((v) => v.uploadInfo.uploaded).length,
    });
  } catch (err) {
    console.error('Error fetching videos:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/thumbnail/:filename', (req, res) => {
  const { filename } = req.params;
  const thumbPath = ytManager.resolveThumbnailPath(filename);

  if (thumbPath && fs.existsSync(thumbPath)) {
    const ext = path.extname(thumbPath).toLowerCase();
    const contentType = ext === '.png' ? 'image/png' : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/png';
    res.setHeader('Content-Type', contentType);
    return fs.createReadStream(thumbPath).pipe(res);
  }

  // Dynamic SVG Thumbnail fallback
  const rawBase = filename.replace(/\.mp4$/i, '').replace(/_/g, ' ');
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(`
    <svg xmlns="http://www.w3.org/2000/svg" width="720" height="1280" viewBox="0 0 720 1280">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#090D16" />
          <stop offset="50%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)" />
      <circle cx="360" cy="580" r="70" fill="rgba(56, 189, 248, 0.15)" stroke="#38BDF8" stroke-width="3" />
      <polygon points="345,545 390,580 345,615" fill="#38BDF8" />
      <text x="360" y="700" font-family="-apple-system, sans-serif" font-weight="800" font-size="32" fill="#F8FAFC" text-anchor="middle">${rawBase.slice(0, 32)}</text>
      <text x="360" y="740" font-family="-apple-system, sans-serif" font-weight="600" font-size="16" fill="#38BDF8" text-anchor="middle">PEERGRAPHICS EDUCATIONAL ENGINE</text>
    </svg>
  `);
});

// Video streaming with partial range requests (HTTP 206)
app.get('/api/video-stream/:filename', (req, res) => {
  const safeFilename = path.basename(req.params.filename);
  const filePath = path.join(ytManager.OUT_DIR, safeFilename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send('Video not found in out/');
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = end - start + 1;
    const file = fs.createReadStream(filePath, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(200, head);
    fs.createReadStream(filePath).pipe(res);
  }
});

app.post('/api/save-metadata', (req, res) => {
  const { filename, metadata } = req.body;
  if (!filename || !metadata) {
    return res.status(400).json({ error: 'filename and metadata are required' });
  }

  try {
    const allMeta = ytManager.getSavedMetadata();
    allMeta[filename] = { ...allMeta[filename], ...metadata };
    ytManager.saveMetadataRecord(allMeta);
    res.json({ success: true, metadata: allMeta[filename] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// -------------------------------------------------------------------
// 3. YouTube Upload Pipeline
// -------------------------------------------------------------------

app.get('/api/upload-status', (req, res) => {
  res.json(activeUpload);
});

app.post('/api/upload', async (req, res) => {
  const {
    filename,
    title,
    description,
    tags,
    categoryId = '27',
    privacyStatus = 'public',
    publishAt,
    pinnedComment,
    autoPostComment = true,
    autoUploadCaptions = true,
  } = req.body;

  if (!filename) {
    return res.status(400).json({ error: 'Filename is required' });
  }

  const safeFilename = path.basename(filename);
  const filePath = path.join(ytManager.OUT_DIR, safeFilename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: `Video file ${safeFilename} not found in out/` });
  }

  if (activeUpload.inProgress) {
    return res.status(409).json({ error: 'Another upload is already in progress' });
  }

  const clientObj = ytManager.getOAuth2ClientForChannel();
  if (!clientObj) {
    return res.status(401).json({ error: 'Not authenticated with YouTube. Please connect a channel first or import from RightClips.' });
  }

  // Validate scheduled publish time if scheduling requested
  const isScheduling = privacyStatus === 'scheduled' || !!publishAt;
  let isoPublishAt = null;
  if (isScheduling) {
    if (!publishAt) {
      return res.status(400).json({ error: 'Future date/time is required for scheduled release.' });
    }
    const schedDate = new Date(publishAt);
    if (isNaN(schedDate.getTime()) || schedDate.getTime() <= Date.now() + 60 * 1000) {
      return res.status(400).json({ error: 'Scheduled time must be at least 2 minutes in the future.' });
    }
    isoPublishAt = schedDate.toISOString();
  }

  activeUpload = {
    inProgress: true,
    progress: 0,
    stage: 'Initializing YouTube API session...',
    filename: safeFilename,
    result: null,
    error: null,
  };

  res.json({ message: 'Upload started', filename: safeFilename });

  // Run upload asynchronously in background
  (async () => {
    try {
      const youtube = google.youtube({ version: 'v3', auth: clientObj.oauth2Client });
      const fileSize = fs.statSync(filePath).size;

      const statusPayload = { selfDeclaredMadeForKids: false };
      if (isScheduling) {
        statusPayload.privacyStatus = 'private'; // YouTube requirement for scheduled release
        statusPayload.publishAt = isoPublishAt;
      } else {
        statusPayload.privacyStatus = privacyStatus;
      }

      activeUpload.stage = isScheduling
        ? `Uploading video (Private mode for scheduled release on ${new Date(isoPublishAt).toLocaleString()})...`
        : 'Uploading video chunks to YouTube...';

      const tagArray = Array.isArray(tags)
        ? tags
        : typeof tags === 'string'
        ? tags.split(',').map((t) => t.trim()).filter(Boolean)
        : ['Shorts', 'Education', 'Science', 'PeerGraphics'];

      // 1. Upload Video
      const response = await youtube.videos.insert(
        {
          part: ['snippet', 'status'],
          notifySubscribers: true,
          requestBody: {
            snippet: {
              title: title || safeFilename,
              description: description || '',
              tags: tagArray,
              categoryId: categoryId || '27',
              defaultLanguage: 'en',
              defaultAudioLanguage: 'en',
            },
            status: statusPayload,
          },
          media: {
            body: fs.createReadStream(filePath),
          },
        },
        {
          onUploadProgress: (evt) => {
            const pct = Math.min(99, Math.round((evt.bytesRead / fileSize) * 100));
            activeUpload.progress = pct;
            activeUpload.stage = `Uploading: ${pct}% (${(evt.bytesRead / (1024 * 1024)).toFixed(1)}MB / ${(fileSize / (1024 * 1024)).toFixed(1)}MB)`;
          },
        }
      );

      const videoId = response.data.id;
      let thumbnailAttached = false;
      let captionsUploaded = false;
      let commentPosted = false;

      // 2. Attach Custom Thumbnail
      const thumbPath = ytManager.resolveThumbnailPath(safeFilename);
      if (thumbPath && fs.existsSync(thumbPath)) {
        try {
          activeUpload.stage = 'Attaching custom thumbnail...';
          await youtube.thumbnails.set({
            videoId,
            media: {
              mimeType: 'image/png',
              body: fs.createReadStream(thumbPath),
            },
          });
          thumbnailAttached = true;
          console.log(`✅ Thumbnail attached to ${videoId}`);
        } catch (thumbErr) {
          console.warn('⚠️ Thumbnail attachment warning:', thumbErr.message);
        }
      }

      // 3. Upload Captions (.srt / .vtt)
      if (autoUploadCaptions) {
        const captionPath = ytManager.resolveCaptionPath(safeFilename);
        if (captionPath && fs.existsSync(captionPath)) {
          try {
            activeUpload.stage = 'Uploading synchronized captions (.srt)...';
            await youtube.captions.insert({
              part: ['snippet'],
              requestBody: {
                snippet: {
                  videoId,
                  language: 'en',
                  name: 'English',
                  isDraft: false,
                },
              },
              media: {
                mimeType: '*/*',
                body: fs.createReadStream(captionPath),
              },
            });
            captionsUploaded = true;
            console.log(`✅ Captions attached to ${videoId}`);
          } catch (capErr) {
            console.warn('⚠️ Captions upload warning:', capErr.message);
          }
        }
      }

      // 4. Post Pinned Comment
      if (autoPostComment && pinnedComment && pinnedComment.trim()) {
        try {
          activeUpload.stage = 'Posting discussion pinned comment...';
          await youtube.commentThreads.insert({
            part: ['snippet'],
            requestBody: {
              snippet: {
                videoId,
                topLevelComment: {
                  snippet: {
                    textOriginal: pinnedComment.trim(),
                  },
                },
              },
            },
          });
          commentPosted = true;
          console.log(`✅ Discussion comment posted to ${videoId}`);
        } catch (commErr) {
          console.warn('⚠️ Comment posting warning:', commErr.message);
        }
      }

      // 5. Save Record
      const uploadsRecord = ytManager.getUploadsRecord();
      const uploadEntry = {
        filename: safeFilename,
        videoId,
        youtubeUrl: `https://youtu.be/${videoId}`,
        studioUrl: `https://studio.youtube.com/video/${videoId}/edit`,
        channelId: clientObj.channel.channelId,
        channelTitle: clientObj.channel.title,
        title: title || safeFilename,
        uploaded: true,
        publishedAt: new Date().toISOString(),
        privacyStatus: isScheduling ? 'scheduled' : privacyStatus,
        isScheduled,
        publishAt: isoPublishAt,
        thumbnailAttached,
        captionsUploaded,
        commentPosted,
      };

      uploadsRecord[safeFilename] = uploadEntry;
      ytManager.saveUploadsRecord(uploadsRecord);

      activeUpload = {
        inProgress: false,
        progress: 100,
        stage: 'Completed Successfully!',
        filename: safeFilename,
        result: uploadEntry,
        error: null,
      };

      console.log(`🎉 Video ${safeFilename} successfully published to YouTube: https://youtu.be/${videoId}`);
    } catch (err) {
      console.error('❌ Upload failed:', err);
      activeUpload = {
        inProgress: false,
        progress: 0,
        stage: 'Failed',
        filename: safeFilename,
        result: null,
        error: err.message || 'Unknown YouTube API error',
      };
    }
  })();
});

// Start Server
app.listen(PORT, () => {
  console.log(`
=====================================================
🚀 PeerGraphics YouTube Studio Live
📡 Local URL: http://localhost:${PORT}
=====================================================
  `);
});
