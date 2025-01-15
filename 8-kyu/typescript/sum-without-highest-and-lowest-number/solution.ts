export function sumArray(array:number[] | null) : number {
  if (!array || array.length < 2) return 0;
  return array.reduce((acc, val) => acc + val, 0) - (Math.min(...array) + Math.max(...array));
}