export const nbYear = (p0:number, percent:number, aug:number, p:number): number => {
  let years: number = 0;
  for (let i: number =  0; p0 < p; i = i + 1) {
    p0 = Math.floor(p0 + (p0 * percent / 100) + aug);
    years = years + 1;;
  };
  return years;
}