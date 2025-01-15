function sameCase(a, b) {
  const isAlpha = (v) => /[a-z]/i.test(v);
  const isLowAlpha = (v) => /[a-z]/.test(v);
  if (!isAlpha(a) || !isAlpha(b)) return -1;
  return isLowAlpha(a) == isLowAlpha(b) ? 1 : 0;
}