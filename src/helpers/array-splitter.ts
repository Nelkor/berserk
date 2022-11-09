const patterns: Record<number, number[]> = {
  2: [2],
  3: [3],
  4: [2, 2],
  5: [3, 2],
  6: [3, 3],
  7: [3, 2, 2],
  8: [3, 3, 2],
  9: [3, 3, 3],
}

export const MAX_PATTERN_LENGTH = parseInt(Object.keys(patterns).pop() || '')

export const splitArray = <T>(arr: T[]): T[][] => {
  const pattern = patterns[arr.length]

  return pattern
    ? pattern.reduce<T[][]>((acc, cur) => {
        acc.push(arr.splice(0, cur))

        return acc
      }, [])
    : []
}
