function bouncingBall(h,  bounce,  window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h)
    return -1;
  let res = 0;
  for (h; h > window; h = h * bounce) { res = res + 2 };
  return (res ? res - 1 : 0);
}