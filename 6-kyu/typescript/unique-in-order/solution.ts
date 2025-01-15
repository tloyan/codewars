export function uniqueInOrder (iterable: string | (string | number)[]):(string | number)[] {
  return [...iterable].reduce((acc: (string | number)[], val: (string | number)) => {
    if (acc[acc.length - 1] !== val) {
      return [...acc, val]
    }
    return acc
  }, [])
};
