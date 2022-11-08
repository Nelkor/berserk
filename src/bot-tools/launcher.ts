import { Berserk } from './types'

export const launchBot = (bot: Berserk) => {
  process.once('SIGINT', () => bot.stop())
  process.once('SIGTERM', () => bot.stop())

  bot.start().then()

  bot.api.getMe().then(({ first_name, username }) => {
    console.log(`Hello! My name is ${first_name} and I am working.`)
    console.log(`Contact me at https://t.me/${username}`)
  })
}
