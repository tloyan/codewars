export function howMuchILoveYou(petals: number): string{
  if (petals % 6 == 1) return 'I love you';
  if (petals % 6 == 2) return 'a little';
  if (petals % 6 == 3) return 'a lot';
  if (petals % 6 == 4) return 'passionately';
  if (petals % 6 == 5) return 'madly';
  return 'not at all';
}