function countBy(x, n) {
  let z = [];
  
  z[0] = x;
  for (let i = 1; i < n; i = i + 1) {
    z[i] = z[i - 1] + x;
  }
  
  return z;
}