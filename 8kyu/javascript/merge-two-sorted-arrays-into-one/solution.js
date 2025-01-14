function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2.filter((v) => !arr1.includes(v))].sort((a, b) => a - b);
}