import { InlineKeyboard } from 'grammy'

import { MAX_PATTERN_LENGTH, splitArray } from '@/helpers'
import { TOO_SHORT, NOT_FOUND, TOO_COMMON, SELECT_VARIANT } from '@/messages'

import { formatRule } from './format-rule'
import { searchRules } from './search-rules'
import { RulesAnswer } from './types'

export const getAnswer = (
  search: string,
  fromId: number,
  messageId: number
): RulesAnswer => {
  if (search.length < 3) {
    return { text: TOO_SHORT }
  }

  const rules = searchRules(search)

  if (!rules.length) {
    return { text: NOT_FOUND }
  }

  if (rules.length > MAX_PATTERN_LENGTH) {
    return { text: TOO_COMMON }
  }

  return rules.length > 1
    ? {
        text: SELECT_VARIANT,
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
