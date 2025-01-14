export function solve(arr: string[]) {
  return arr.map((str: string): number => {
    return str.split('').reduce((acc: number, val: string, index: number) => {
      if (val.match(/[a-z]/i) && (val.charCodeAt(0) - 96) == index + 1) return acc + 1;
      if (val.match(/[A-Z]/i) && (val.charCodeAt(0) - 64) == index + 1) return acc + 1;
      return acc;
    }, 0);
  });
}