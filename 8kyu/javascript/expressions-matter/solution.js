function expressionMatter(a, b, c) {
  if (a < 2 && c < 2)
    return (a + b + c);
  if (a < 2  || (b < 2 && a <= c))
    return ((a + b) * c);
  if (c < 2 || (b < 2))
    return (a * (b + c));
  return (a * b * c);
}