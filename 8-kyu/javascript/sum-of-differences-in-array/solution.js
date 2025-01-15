function sumOfDifferences(arr) {
  return arr.sort((a, b) => b - a).reduce((acc, val, index) => {
    if (index == 0) return acc;
    return acc + (arr[index - 1] - val);
  }, 0);
}