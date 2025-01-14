export function findMultiples(integer: number, limit: number): number[] {
  let arr: number[] = [];
  for(let i: number = 1; i * integer <= limit; i++) {
    arr.push(i * integer);
  }
  return arr;
}