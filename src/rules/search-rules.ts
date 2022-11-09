import { rules } from './data'

export const searchRules = (str: string) =>
  rules.filter(
    item => item.preparedText.includes(str) || item.preparedCode === str
  )

export const getRuleByCode = (code: string) =>
  rules.find(item => item.code === code)
