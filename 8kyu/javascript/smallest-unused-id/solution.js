function nextId(ids) {
  const arr = [...new Set(ids)].sort((a, b) => a - b);
  if (arr[0] != 0) return 0;
  return arr.find((v, i) => {
    return arr[i + 1] != v + 1;
  }) + 1;
}