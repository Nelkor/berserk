import { reply, Berserk } from '@/bot-tools'
import { getRuleByCode, getAnswer, formatRule } from '@/rules'

export const setHandlers = (bot: Berserk) => {
  bot.chatType('private').command('start', ctx => {
    ctx.reply('Okay').then()
  })

  bot.on('message').command(['r', 'rule', 'rules'], ctx => {
    const replyToMessage =
      ctx.chat.type === 'group' ? ctx.msg.message_id : undefined

    const { text, picture, keyboard } = getAnswer(
      ctx.match,
      ctx.from.id,
      ctx.msg.message_id
    )

    reply(ctx, text, replyToMessage, { picture, keyboard })
  })

  bot.on('callback_query:data', ctx => {
    const [code, userIdStr, messageIdStr] = ctx.callbackQuery.data.split('/')
    const userId = parseInt(userIdStr)
    const messageId = parseInt(messageIdStr)

    if (ctx.from.id != userId) {
      ctx.answerCallbackQuery({ text: 'Не твоё 😏' }).then()

      return
    }

    ctx.deleteMessage().then()
    ctx.answerCallbackQuery().then()

    const rule = getRuleByCode(code)

    if (!rule) {
      return
    }

    const { text, picture } = formatRule(rule)

    reply(ctx, text, messageId, { picture })
  })
}
