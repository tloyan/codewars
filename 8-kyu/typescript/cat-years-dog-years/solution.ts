export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  return [
    humanYears,
    (humanYears * 4 + (humanYears >= 2 ? 16 : 11)),
    (humanYears * 5 + (humanYears >= 2 ? 14 : 10))
  ];
}
