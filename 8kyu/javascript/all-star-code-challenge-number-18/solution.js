function strCount(str, letter){  
  return str.split('').reduce((acc, val) => acc += (val == letter), 0);
//   return str.split('').filter((v) => v == letter).length;
}