export default function isSquare(n: number): boolean {
  if (n < 0) return false;
  return !((Math.sqrt(n) * (10 ** 12))  % (10 ** 12));
};
