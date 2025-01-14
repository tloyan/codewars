function XO(str) {
  return str.match(/[xX]/g)?.length == str.match(/[oO]/g)?.length;
}