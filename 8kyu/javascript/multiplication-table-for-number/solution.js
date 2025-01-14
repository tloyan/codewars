function multiTable(number) {
  let res = '';
  for (let i = 1; i < 11; i++) {
    if (i != 1) res += '\n';
    res += `${i} * ${number} = ${i * number}`;
  }
  return res;
}