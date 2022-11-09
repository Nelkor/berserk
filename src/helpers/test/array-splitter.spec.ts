import { splitArray } from '@/helpers'

describe('splitArray', () => {
  test('splitArray should be defined', () => {
    expect(splitArray).toBeDefined()
  })

  test('splitArray should work correctly', () => {
    expect(splitArray([1])).toEqual([])
    expect(splitArray([1, 1])).toEqual([[1, 1]])
    expect(splitArray([1, 1, 1])).toEqual([[1, 1, 1]])

    expect(splitArray([1, 1, 1, 1])).toEqual([
      [1, 1],
      [1, 1],
    ])

    expect(splitArray([1, 1, 1, 1, 1])).toEqual([
      [1, 1, 1],
      [1, 1],
    ])
  })
})
