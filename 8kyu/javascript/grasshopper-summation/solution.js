var summation = function (num) {
  if (num == 0)
    return num;
  return num + summation(num - 1);
}

// var summation = function (num) {
//   sum = 0;
//   for (num; num > 0; num--)
//     sum = sum + num;
//   return sum;
// }