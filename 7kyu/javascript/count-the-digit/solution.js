function nbDig(n, d) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    count = count + (i * i).toString().split('').filter((v) => v == d).length;
  }
  return count;
}