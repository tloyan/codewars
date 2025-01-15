function sumMul(n,m) {
  if (n < 1 || m < 1)
    return 'INVALID';
  
  let res = 0;
  for (let i = 1; (n * i) < m; i++) {
    res = res + (n * i);
  }
  return res;
}