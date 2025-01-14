function powersOfTwo(n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
      res = [...res, 2 ** i]
  }
  return res;
}