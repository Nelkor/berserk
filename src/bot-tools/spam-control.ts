import { NextFunction } from 'grammy'

import { BerserkContext } from './types'

const PASS_DELAY = 1000 * 2

export const spamControl = (ctx: BerserkContext, next: NextFunction) => {
  const now = Date.now()
  const timeFromLastMessage = now - ctx.session.lastMessageTime

  ctx.session.lastMessageTime = now

  if (timeFromLastMessage > PASS_DELAY) {
    next().then()
  }
}
