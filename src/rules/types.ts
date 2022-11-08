interface RawRulesItem {
  code: string
  text: string
  keywords: string[]
  picture?: string
}

export interface RawRulesChapter {
  title: string
  items: RawRulesItem[]
}

export interface RulesItem extends RawRulesItem {
  preparedText: string
  preparedCode: string
  title: string
}
