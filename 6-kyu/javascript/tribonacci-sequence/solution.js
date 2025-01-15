function tribonacci(signature,n) {
  let res = [];
  for (let i = 0; i < n; i = i + 1) {
    if (i < 3)
      res.push(signature[i]);
    else
      res.push(res[i - 3] + res[i - 2] + res[i - 1]);
  }
  return res;
}