import { CommandContext } from 'grammy'

import { BerserkContext } from './types'

export const sendTextWithPicture = (
  ctx: CommandContext<BerserkContext>,
  caption: string,
  picture?: string
) => {
  const options = {
    reply_to_message_id:
      ctx.chat.type === 'group' ? ctx.msg.message_id : undefined,
    parse_mode: 'HTML' as const,
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
