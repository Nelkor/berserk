import { RulesItem, RulesAnswer } from './types'

export const formatRule = (item: RulesItem): RulesAnswer => {
  const { title, text, code, picture } = item
  const caption = `<i>${title}</i>\n\n<b>${code}.</b> ${text}`

  return { text: caption, picture }
}
