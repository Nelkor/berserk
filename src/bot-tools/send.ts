import { Context } from 'grammy'

import { ReplyExtra } from './types'

export const reply = (
  ctx: Context,
  caption: string,
  reply_to_message_id?: number,
  { picture, keyboard }: ReplyExtra = {}
) => {
  const options = {
    reply_to_message_id,
    parse_mode: 'HTML' as const,
    reply_markup: keyboard,
  }

  if (picture) {
    ctx
      .replyWithPhoto(picture, {
        caption,
        ...options,
      })
      .then()
  } else {
    ctx.reply(caption, options).then()
  }
}
