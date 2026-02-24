export interface Speaker {
  id: string
  label: string // "User-1", "User-2", or renamed by user
}

export interface TranscriptSegment {
  speakerId: string
  text: string
  startTime: number // seconds
  endTime: number
}

export interface Recording {
  id: string
  title: string
  date: string // ISO
  duration: number // seconds
  language: string
  speakers: Speaker[]
  transcript: TranscriptSegment[]
  summary?: string
}
