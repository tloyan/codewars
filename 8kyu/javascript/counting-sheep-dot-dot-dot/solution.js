function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((val) => val).length;
//   return arrayOfSheep.reduce((acc, val) => acc = (val ? acc + 1 : acc), 0);
}