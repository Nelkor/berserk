import { Bot, session } from 'grammy'

import { token, initial, launchBot, spamControl, Berserk } from '@/bot-tools'

import { setHandlers } from './handlers'

const bot: Berserk = new Bot(token)

bot.use(session({ initial }))
bot.use(spamControl)

setHandlers(bot)
launchBot(bot)
