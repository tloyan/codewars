function findOdd(A) {
  //   return A.reduce((acc, val) => acc = acc ^ val, 0);
  return A.find((val, index) => A.filter(v => v == val).length % 2);  
//   let cases = {};
  
//   A.forEach((v) => {
//     if (typeof cases[v] == 'undefined')
//       cases[v] = 0;
//     cases[v] = cases[v] + 1;
//   })
  
//   const keys = Object.keys(cases);
  
//   for (let i = 0; i < keys.length; i++) {
//     if (Number(cases[keys[i]]) % 2 != 0)
//       return Number(keys[i]);
//   }

}