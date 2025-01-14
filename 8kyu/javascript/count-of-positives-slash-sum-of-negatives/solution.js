function countPositivesSumNegatives(input) {
  if (!input || input.length == 0)
    return [];
  return input.reduce((acc, val) => {
    if (val > 0)
      acc[0] = acc[0] + 1;
    if (val < 0)
      acc[1] = acc[1] + val;
    return acc;
  }, [0, 0])
}