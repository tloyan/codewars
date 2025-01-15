function howManydays(month) {
  if (month == 2) return 28;
  return [4, 6, 9, 11].includes(month) ? 30 : 31;
//   var days;
//   switch (month) {
//     case 2:
//       days = 28;
//       break;
//     case 4 || 6 || 9 || 11:
//       days = 30;
//       break;
//     default:
//       days = 31;
//       break;
//   }
//   return days;
}