function toCsvText(array) {
  return array.reduce((acc, val, i) => acc + (i != 0 ? '\n' : '') + val.join(','), '');
}