function comp(array1, array2) {
  if (!array1 || !array2)
    return false;
  return array1.filter((n) => {
    return array1.filter(v => v == n).length == array2.filter((v) => v == n * n).length
  }).length == array1.length;
}