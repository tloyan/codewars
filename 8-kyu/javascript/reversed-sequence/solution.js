const reverseSeq = n => {
  let arr = [];
  for (let i = n; n > 0; n--) {
    arr = [...arr, n];
  }
  return arr;
};