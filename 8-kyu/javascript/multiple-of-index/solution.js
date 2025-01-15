function multipleOfIndex(array) {
  return array.filter((val, i) => val % i == 0);
}