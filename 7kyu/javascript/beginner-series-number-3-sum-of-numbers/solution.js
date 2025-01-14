function getSum(a, b) {
  let min = a < b ? a : b;
  let max = a > b ? a : b;
  return (max - min + 1) * ((min + max) / 2);
}