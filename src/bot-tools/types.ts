import { Bot, Context, SessionFlavor } from 'grammy'

export interface SessionData {
  lastMessageTime: number
}

export type BerserkContext = Context & SessionFlavor<SessionData>

export type Berserk = Bot<BerserkContext>
