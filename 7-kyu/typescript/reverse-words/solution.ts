export function reverseWords(str: string): string {
  return str.split(" ").map(reverseWord).join(" ")
}

function reverseWord(str: string): string {
  return str.split("").reverse().join("")
}