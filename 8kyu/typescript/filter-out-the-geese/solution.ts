export function gooseFilter (birds: string[]): string[] {
  const geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((item) => !geese.includes(item));
  // return an array containing all of the strings in the input array except those that match strings in geese
}