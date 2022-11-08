const redundantSymbols = /[^ \wа-я]/g
const spaces = /\s+/g

export const prepareText = (str: string) =>
  str
    .replace(/(<([^>]+)>)/g, '')
    .toLowerCase()
    .replace(redundantSymbols, '')
    .replace(spaces, ' ')

export const prepareSearch = (str: string) =>
  str
    .toLowerCase()
    .replace(redundantSymbols, ' ')
    .trim()
    .replace(spaces, ' ')
    // latin "Ex" to cyrillic "H"
    .replaceAll('x', 'х')
