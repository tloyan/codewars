function pipeFix(numbers) {
  const [min, max] = [Math.min(...numbers), Math.max(...numbers)];
  let res = [];
  for (let i = min; i <= max; i++) {
    res = [...res, i];
  }
  return res;
}