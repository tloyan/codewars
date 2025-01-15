function arrayMadness(a, b) {
  return a.reduce((acc, val) => acc + (val ** 2), 1) > b.reduce((acc, val) => acc + (val ** 3), 1);
}