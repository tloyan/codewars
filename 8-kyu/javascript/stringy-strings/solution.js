function stringy(size) {
  let str = '';
  for (let i = 0; i < size; i++) {
    str = str + (i % 2 ? '0' : '1');
  }
  return str;
}