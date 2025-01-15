function highAndLow(numbers) {
  const arr = numbers.split(' '),
        max = Math.max(...arr),
        min = Math.min(...arr);
  return `${max} ${min}`;
}