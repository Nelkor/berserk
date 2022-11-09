import { InlineKeyboard } from 'grammy'

import { sendTextWithPicture, Berserk } from '@/bot-tools'
import { searchRules, getRuleByCode } from '@/rules'
import { splitArray, MAX_PATTERN_LENGTH } from '@/helpers'

export const setHandlers = (bot: Berserk) => {
  bot.chatType('private').command('start', ctx => {
    ctx.reply('Okay').then()
  })

  bot.on('message').command(['r', 'rule', 'rules'], ctx => {
    if (ctx.match.length < 3) {
      sendTextWithPicture(ctx, 'Хотя бы три буквы...')

      return
    }

    const foundRules = searchRules(ctx.match)

    if (!foundRules.length) {
      sendTextWithPicture(
        ctx,
        'К сожалению, я не смог найти такой пункт правил'
      )

      return
    }

    if (foundRules.length > MAX_PATTERN_LENGTH) {
      sendTextWithPicture(ctx, 'Похоже, что это слишком общая фраза')

      return
    }

    if (foundRules.length === 1) {
      const [{ title, code, text, picture }] = foundRules
      const caption = `<i>${title}</i>\n\n<b>${code}.</b> ${text}`

      sendTextWithPicture(ctx, caption, picture)

      return
    }

    const buttons = foundRules.map(({ code }) => ({
      text: code,
      callback_data: `${code}/${ctx.from.id}/${ctx.msg.message_id}`,
    }))

    const keyboard = new InlineKeyboard(splitArray(buttons))

    ctx
      .reply('Эта фраза встречается в нескольких пунктах', {
        reply_markup: keyboard,
        reply_to_message_id:
          ctx.chat.type === 'group' ? ctx.msg.message_id : undefined,
      })
      .then()
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

    const options = {
      reply_to_message_id: messageId,
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
  })
}
