import { InlineKeyboard } from 'grammy'

import { MAX_PATTERN_LENGTH, splitArray } from '@/helpers'

import { formatRule } from './format-rule'
import { searchRules } from './search-rules'
import { RulesAnswer } from './types'

export const getAnswer = (
  search: string,
  fromId: number,
  messageId: number
): RulesAnswer => {
  if (search.length < 3) {
    return { text: 'Хотя бы три буквы' }
  }

  const rules = searchRules(search)

  if (!rules.length) {
    return { text: 'К сожалению, я не смог найти такой пункт правил' }
  }

  if (rules.length > MAX_PATTERN_LENGTH) {
    return { text: 'Похоже, что это слишком общая фраза' }
  }

  return rules.length > 1
    ? {
        text: 'Эта фраза встречается в нескольких пунктах',
        keyboard: new InlineKeyboard(
          splitArray(
            rules.map(({ code }) => ({
              text: code,
              callback_data: `${code}/${fromId}/${messageId}`,
            }))
          )
        ),
      }
    : formatRule(rules[0])
}
