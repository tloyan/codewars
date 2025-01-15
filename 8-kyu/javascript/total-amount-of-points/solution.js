function points(games) {
  return games.reduce((acc, val) => {
    const [x, y] = val.split(':');
    if (x > y) return acc + 3;
    if (x == y) return acc + 1;
    return acc;
  }, 0)
}