import { InlineKeyboard } from 'grammy'

import { reply, Berserk } from '@/bot-tools'
import { searchRules, getRuleByCode } from '@/rules'
import { splitArray, MAX_PATTERN_LENGTH } from '@/helpers'

export const setHandlers = (bot: Berserk) => {
  bot.chatType('private').command('start', ctx => {
    ctx.reply('Okay').then()
  })

  bot.on('message').command(['r', 'rule', 'rules'], ctx => {
    const replyToMessage =
      ctx.chat.type === 'group' ? ctx.msg.message_id : undefined

    if (ctx.match.length < 3) {
      reply(ctx, 'Хотя бы три буквы...', replyToMessage)

      return
    }

    const foundRules = searchRules(ctx.match)

    if (!foundRules.length) {
      reply(
        ctx,
        'К сожалению, я не смог найти такой пункт правил',
        replyToMessage
      )

      return
    }

    if (foundRules.length > MAX_PATTERN_LENGTH) {
      reply(ctx, 'Похоже, что это слишком общая фраза', replyToMessage)

      return
    }

    if (foundRules.length === 1) {
      const [{ title, code, text, picture }] = foundRules
      const caption = `<i>${title}</i>\n\n<b>${code}.</b> ${text}`

      reply(ctx, caption, replyToMessage, { picture })

      return
    }

    const buttons = foundRules.map(({ code }) => ({
      text: code,
      callback_data: `${code}/${ctx.from.id}/${ctx.msg.message_id}`,
    }))

    const keyboard = new InlineKeyboard(splitArray(buttons))

    reply(ctx, 'Эта фраза встречается в нескольких пунктах', replyToMessage, {
      keyboard,
    })
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

    const { title, text, picture } = rule
    const caption = `<i>${title}</i>\n\n<b>${code}.</b> ${text}`

    reply(ctx, caption, messageId, { picture })
  })
}
