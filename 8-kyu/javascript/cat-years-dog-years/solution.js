var humanYearsCatYearsDogYears = function(humanYears) {
  return [
    humanYears,
    humanYears * 4 + (humanYears > 1 ? 16 : 11),
    humanYears * 5 + (humanYears > 1 ? 14 : 10),
  ]
}
