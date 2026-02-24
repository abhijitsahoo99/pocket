import type { Recording } from '../types'

export const mockRecordings: Recording[] = [
  {
    id: '1',
    title: 'Team standup',
    date: '2026-02-25T09:00:00Z',
    duration: 847,
    language: 'English',
    speakers: [
      { id: 's1', label: 'Abhijit' },
      { id: 's2', label: 'User-2' },
      { id: 's3', label: 'User-3' },
    ],
    transcript: [
      { speakerId: 's1', text: 'Good morning everyone, let\'s go through the updates.', startTime: 0, endTime: 5 },
      { speakerId: 's2', text: 'I finished the authentication module yesterday.', startTime: 6, endTime: 10 },
      { speakerId: 's3', text: 'I am working on the dashboard, should be done by EOD.', startTime: 11, endTime: 16 },
    ],
    summary: 'Daily standup covering auth module completion and dashboard progress.',
  },
  {
    id: '2',
    title: 'Client call — Ravi Sharma',
    date: '2026-02-24T14:30:00Z',
    duration: 3240,
    language: 'Hindi + English',
    speakers: [
      { id: 's1', label: 'Abhijit' },
      { id: 's2', label: 'Ravi Sharma' },
    ],
    transcript: [
      { speakerId: 's2', text: 'Namaste, aaj hum product demo ke baare mein baat karte hain.', startTime: 0, endTime: 7 },
      { speakerId: 's1', text: 'Haan bilkul, main aapko feature walkthrough de deta hoon.', startTime: 8, endTime: 13 },
    ],
    summary: 'Product demo discussion with Ravi. Key asks: offline mode, Hindi UI, faster onboarding.',
  },
  {
    id: '3',
    title: 'Personal note',
    date: '2026-02-23T20:15:00Z',
    duration: 183,
    language: 'English',
    speakers: [{ id: 's1', label: 'Abhijit' }],
    transcript: [
      { speakerId: 's1', text: 'Need to follow up on the Sarvam API integration next week.', startTime: 0, endTime: 5 },
    ],
  },
  {
    id: '4',
    title: 'Design review',
    date: '2026-02-22T11:00:00Z',
    duration: 2100,
    language: 'English',
    speakers: [
      { id: 's1', label: 'Abhijit' },
      { id: 's2', label: 'Designer' },
    ],
    transcript: [],
  },
]
