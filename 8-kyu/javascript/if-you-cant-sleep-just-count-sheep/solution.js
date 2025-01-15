var countSheep = function (num) {
  let str = '';
  for (let i = 0; i < num; i = i + 1) {
    str = str + `${i + 1} sheep...`;
  }
  return str;
}