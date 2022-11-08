import { prepareSearch } from '@/helpers'

import { rules } from './data'

export const searchRules = (str: string) => {
  const search = prepareSearch(str)

  return rules.filter(
    item => item.preparedText.includes(search) || item.preparedCode === search
  )
}

export const getRuleByCode = (code: string) =>
  rules.find(item => item.code === code)
