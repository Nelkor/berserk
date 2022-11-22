import { reply, Berserk } from '@/bot-tools'
import { getRuleByCode, getAnswer, formatRule } from '@/rules'
import { prepareSearch } from '@/helpers'
import {
  NOT_YOUR_BUTTONS,
  TOO_OLD_BUTTONS,
  HOW_TO_SEARCH,
  GREETINGS,
  HOW_TO_REPORT,
  PRIVATE_ONLY,
  HELP,
} from '@/messages'

export const setHandlers = (bot: Berserk) => {
  bot.chatType('private').command('start', ctx => {
    ctx.reply(GREETINGS).then()
  })

  bot.chatType('private').command('help', ctx => {
    ctx
      .reply(HELP, { parse_mode: 'HTML', disable_web_page_preview: true })
      .then()
  })

  bot.chatType('private').command('report', ctx => {
    ctx.reply(HOW_TO_REPORT).then()
  })

  bot.chatType(['group', 'supergroup']).command(['help', 'report'], ctx => {
    ctx.reply(PRIVATE_ONLY, { reply_to_message_id: ctx.msg.message_id }).then()
  })

  bot.on('message').command(['r', 'rule', 'rules'], ctx => {
    const replyToMessage =
      ctx.chat.type === 'group' || ctx.chat.type === 'supergroup'
        ? ctx.msg.message_id
        : undefined

    if (!ctx.match) {
      reply(ctx, HOW_TO_SEARCH, replyToMessage)

      return
    }

    const { text, picture, keyboard } = getAnswer(
      prepareSearch(ctx.match),
      ctx.from.id,
      ctx.msg.message_id
    )

    reply(ctx, text, replyToMessage, { picture, keyboard })
  })

  bot.on('callback_query:data', async ctx => {
    const [code, userIdStr, messageIdStr] = ctx.callbackQuery.data.split('/')
    const userId = parseInt(userIdStr)
    const messageId = parseInt(messageIdStr)

    if (ctx.from.id != userId) {
      ctx.answerCallbackQuery({ text: NOT_YOUR_BUTTONS }).then()

      return
    }

    try {
      await ctx.deleteMessage()
    } catch (e) {
      ctx.answerCallbackQuery({ text: TOO_OLD_BUTTONS }).then()

      return
    }

    ctx.answerCallbackQuery().then()

    const rule = getRuleByCode(code)

    if (!rule) {
      return
    }

    const { text, picture } = formatRule(rule)

    reply(ctx, text, messageId, { picture })
  })
}
