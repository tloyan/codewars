function getCount(str) {
  const range = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').reduce((acc, val) => {
    if (range.includes(val))
      acc = acc + 1;
    return acc;
  }, 0);
}