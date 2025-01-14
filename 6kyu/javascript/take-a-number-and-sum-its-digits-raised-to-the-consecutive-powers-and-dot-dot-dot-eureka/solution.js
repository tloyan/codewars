function sumDigPow(a, b) {
  let arr = [];
  for (let n = a; n < b; n++) {
    if (Number(n.toString().split('').reduce((acc, val, index) => acc + (Number(val) ** (index + 1)), 0)) == n)
      arr.push(n);
  }
  return arr;
}
