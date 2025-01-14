function firstNonConsecutive (arr) {
  const res = arr[arr.findIndex((val, i) => arr[i + 1] != val + 1) + 1];
  if (typeof res == 'undefined')
    return null;
  return res;
}