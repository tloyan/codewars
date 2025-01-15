function digitize(n) {
  return n.toString().split('').reverse().map((val)=>Number(val));
}