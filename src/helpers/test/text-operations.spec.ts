import { prepareSearch, prepareText } from '@/helpers'

describe('prepareText', () => {
  test('prepareText should be defined', () => {
    expect(prepareText).toBeDefined()
  })

  test('prepareText should work correctly', () => {
    expect(prepareText('Первый,  <b>второй</b>')).toBe('первый второй')
  })
})

describe('prepareSearch', () => {
  test('prepareSearch should be defined', () => {
    expect(prepareSearch).toBeDefined()
  })

  test('prepareSearch should work correctly', () => {
    expect(prepareSearch(' Стоимость:/ ~X  монет ')).toBe('стоимость х монет')
  })
})
