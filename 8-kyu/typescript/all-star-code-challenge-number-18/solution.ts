export function strCount(str: string, letter: string): number {
  return str.split('').filter((val: string): boolean => val == letter).length;
}