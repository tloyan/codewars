function well(x) {
  const n = x.filter((v) => v == 'good')?.length;
  if (!n || n.length)
    return 'Fail!'
  return n > 2 ? 'I smell a series!' : 'Publish!';
}