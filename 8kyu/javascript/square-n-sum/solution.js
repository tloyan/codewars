function squareSum(numbers) {
  return numbers.map((n) => n * n).reduce((acc, n) => acc = acc + n, 0);
}