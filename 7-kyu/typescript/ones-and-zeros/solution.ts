export function binaryArrayToNumber(arr: number[]): number{
  return arr.reverse().reduce((acc, val, i) => {
    if (i == 0)
      return acc + (1 * val);
    if (i == 1)
      return acc + (2 * val);
    return acc + ((2 ** i) * val);
  }, 0);
};