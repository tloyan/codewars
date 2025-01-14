function nearestSq(n) {
  let i = n;
  while (1) {
    if (Number.isInteger(Math.sqrt(i)))
      return (i);
    if (Number.isInteger(Math.sqrt(n)))
      return (n);
    i = i + 1;
    n = n - 1;
  }
}