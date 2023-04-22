export type User = {
  id: number
  name: string
  chats: Array<ChatType>
}

export type ChatType = {
  text: string,
  sender: 'me' | 'you'
}
