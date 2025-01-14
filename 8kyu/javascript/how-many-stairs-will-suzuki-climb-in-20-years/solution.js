function stairsIn20(s) {
  return s.reduce((acc, val) => {
    return acc + val.reduce((a, v) => a + v, 0);
  }, 0) * 20;
}