import { Context, InputFile } from 'grammy'

import { ReplyExtra } from './types'

export const reply = (
  ctx: Context,
  caption: string,
  reply_to_message_id?: number,
  { picture, keyboard, forceReply }: ReplyExtra = {}
) => {
  const options = {
    reply_to_message_id,
    parse_mode: 'HTML' as const,
    disable_web_page_preview: true,
    reply_markup: forceReply ? { force_reply: true as const } : keyboard,
  }

  if (picture) {
    ctx
      .replyWithPhoto(new InputFile(picture), {
        caption,
        ...options,
      })
      .then()
  } else {
    ctx.reply(caption, options).then()
  }
}
