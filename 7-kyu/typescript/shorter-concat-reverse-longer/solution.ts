export function shorterReverseLonger(a: string, b: string): string {
  if (a.length < b.length)
    return `${a}${reverse(b)}${a}`
  return `${b}${reverse(a)}${b}`
}

function reverse(word: string) {
  return word.split('').reverse().join('')
}