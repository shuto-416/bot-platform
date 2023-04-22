import { User } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: Array<User> = [
  { id: 101, name: 'Alice', chats: [{ text: 'hello', sender: 'you' }, { text: 'hello', sender: 'me' }] },
  { id: 102, name: 'Bob', chats: [{ text: 'yoyo', sender: 'you' }, { text: 'yo, check it out yo.', sender: 'me' }] },
  { id: 103, name: 'Caroline', chats: [{ text: 'Whats up dude?', sender: 'you' }, { text: 'yeeeah, im goood!', sender: 'me' }] },
  { id: 104, name: 'Dave', chats: [{ text: 'Are you happy? Do you trust GOD?', sender: 'you' }, { text: 'No,,please,,NO,,!!', sender: 'me' }] },
]
