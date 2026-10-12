# 🚀 PeerGraphics

> **Educational Explanation Video Engine & Autonomous YouTube Studio**  
> Produce research-grounded, vertical educational short videos with Remotion and React, and publish them with full YouTube metadata (captions, descriptions with hashtags, tags, and pinned comments) in 1-click.

---

## ✨ Features

- **Strict Two-Phase Educational Workflow (`educational-explanation-video`)**:
  - **Phase 1**: Topic research, learning design, and delivering a 25–40s copy-ready voiceover script for ElevenLabs.
  - **Phase 2**: Audio-driven vertical (9:16, 1080×1920) visual production in Remotion + frame-accurate React animations.
- **Automated YouTube Metadata & Captions Packaging**:
  - Automatically generates click-worthy titles (`#Shorts`), rich descriptions with structured hashtags (`#Education #Science #Explained`), searchable tags, category codes (`27` Education), pinned creator discussion comments, and synchronized `.srt` caption tracks.
- **Localhost YouTube Studio & Auto-Uploader (Port 4002)**:
  - **Cosmic Glassmorphism UI**: High-end dark theme (`#070b14`) built with offline Tailwind CSS and Lucide Icons.
  - **YouTube Shorts Mobile Simulator**: Real-time smartphone preview showing how the title, tags, description, channel avatar, and sound appear on mobile devices.
  - **1-Click RightClips Sync**: Instant auto-discovery and import of Google Cloud credentials and authorized channels from `TopProducts/RightClips`.
  - **Full YouTube Data API v3 Pipeline**: Resumable chunked video upload, custom thumbnail upload (`youtube.thumbnails.set`), caption track upload (`youtube.captions.insert`), scheduled release (`publishAt`), and auto-pinned discussion comment (`youtube.commentThreads.insert`).

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
bun install
# or
npm install
```

### 2. Launch Localhost YouTube Studio
```bash
./start_studio.sh
# or
npm run studio
```
Open **`http://localhost:4002`** in your browser.

---

## 📂 Project Structure

```text
PeerGraphics/
├── .agents/
│   └── skills/
│       └── educational-explanation-video/
│           └── SKILL.md            # Educational explanation production skill
├── studio/
│   ├── public/
│   │   ├── index.html              # YouTube Studio UI & Mobile Shorts Simulator
│   │   └── vendor/                 # Offline Tailwind CSS & Lucide Icons
│   ├── youtube_manager.js          # Google OAuth2 client, RightClips sync, token manager
│   ├── server.js                   # Express backend API & YouTube upload engine (Port 4002)
│   ├── client_secrets.example.json # Example Google Cloud credentials template
│   └── channels.example.json       # Example channels registry template
├── out/                            # Rendered video outputs (.mp4) and thumbnails (.png)
├── production/                     # Scripts, audio maps, metadata.json, and captions.srt
├── start_studio.sh                 # Fast launcher script
├── package.json                    # Project dependencies & scripts
└── README.md
```

---

## 🔑 YouTube API Setup

1. Connect your channel with 1-click if you have `RightClips` on your computer by clicking **Sync RightClips**.
2. Or go to **Settings > Google Cloud Credentials** in the Studio and paste your `client_secrets.json` from the [Google Cloud Console](https://console.cloud.google.com/) (YouTube Data API v3 enabled).
3. Click **Connect Channel** to authorize via OAuth2.

---

## 📜 License
MIT
