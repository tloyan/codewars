const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];

// function minMax(arr){
//   return arr.reduce((acc, val) => {
//     if (val < acc[0]) acc[0] = val;
//     if (val > acc[1]) acc[1] = val;
//     return acc;
//   }, [Infinity, -Infinity]);
// }