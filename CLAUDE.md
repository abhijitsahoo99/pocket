# Pocket — AI Conversation Recorder

## Project Goal
Build an app similar to [Pocket AI](https://heypocket.com/) but **without a physical device** — software-only.

**Approach:** Web-first → React Native later (shared backend). This is also a full-stack learning project — learn by building with AI, not from docs/videos.

---

## What the App Does
A conversation recorder that:
- Records audio (single user, 2 people, or groups)
- Supports **Hindi, English, and regional Indian languages**
- Transcribes and does **speaker diarization** (User-1, User-2...) — users can rename speakers
- During onboarding, captures the owner's voice so the owner is always identified
- Summarises entire conversations
- Lets user choose which AI model to summarise/ask questions
- Lets user ask questions about any recording

---

## Screens

### 1. Recordings Screen (Home)
- List of all recordings
- Each recording card has a CTA button → opens a **bottom drawer** with:
  - Summarise
  - Ask AI
  - Share
  - Delete

### 2. AI Chat Screen
- Ask questions / get summaries across all recordings (not just one)
- Standalone AI chat not tied to a single recording

### 3. Settings / Share / Other
- Model selection
- Account/profile settings

---

## Tech Stack Direction
- **Frontend:** React (web first) → React Native later
- **Transcription/STT:** [Sarvam AI](https://www.sarvam.ai/) for Indian language support
- **AI/LLM:** User-selectable model (OpenAI, Claude, etc.) for summarisation & Q&A
- **Backend:** Node.js / Python API (TBD)
- **Storage:** TBD (audio files + transcripts)

---

## Key Requirements
1. Speaker diarization — identify who said what, allow renaming
2. Owner voice registration at onboarding — always recognise the owner
3. Multi-language: Hindi, English, regional Indian languages
4. Simple goal: record → transcribe → summarise in plain English → ask questions

---

## Current Status
- [ ] UX/UI design (architecture planned, no screens built yet)
- [ ] Frontend scaffolding
- [ ] Backend / API
- [ ] Audio recording + transcription integration (Sarvam AI)
- [ ] Speaker diarization
- [ ] AI summarisation + Q&A
- [ ] Onboarding flow (voice registration)

---

## How to Continue in Cursor / Claude Code
This file has all project context. Start by:
1. Scaffolding a React web app (Vite + React or Next.js)
2. Building the Recordings screen with mock data
3. Then the bottom drawer CTA
4. Then the AI Chat screen
5. Wire up Sarvam AI for transcription

Ask Claude to implement any screen or feature — it has full context from this file.
