export function feast(beast:string, dish:string):boolean {
  return dish[0] == beast[0] && dish[dish.length - 1] == beast[beast.length - 1];
//   return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1]);
}