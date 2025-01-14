export const min = (list: number[]): number => {
  return Math.min(...list);
};

export const max = (list: number[]): number => {
  return Math.max(...list);
};

// export const min = (list: number[]): number => {
//   return list.reduce((acc: number, val: number): number => {
//     if (val < acc)
//       acc = val;
//     return acc;
//   }, Infinity);
// };

// export const max = (list: number[]): number => {
//   return list.reduce((acc: number, val: number): number => {
//     if (val > acc)
//       acc = val;
//     return acc;
//   }, -Infinity);
// };