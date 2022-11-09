import { Bot, Context, InlineKeyboard, SessionFlavor } from 'grammy'

export interface SessionData {
  lastMessageTime: number
}

export type BerserkContext = Context & SessionFlavor<SessionData>

export type Berserk = Bot<BerserkContext>

export interface ReplyExtra {
  picture?: string
  keyboard?: InlineKeyboard
  forceReply?: boolean
}
