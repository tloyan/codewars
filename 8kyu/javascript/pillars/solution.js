function pillars(numPill, dist, width) {
  return ((numPill - 1) * (dist * 100)) + (numPill  * width) - (numPill > 1 ? 2 * width : width);
}