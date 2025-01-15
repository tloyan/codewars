function longestConsec(strarr, k) {
  if (k < 1 || k > strarr.length)
    return '';
  let res = '';
  for (let i = 0; i <= strarr.length - k; i++) {
    let curr_str = strarr.slice(i, i + k).join('');
    if (curr_str.length > res.length)
      res = curr_str;
  }
  return res;
}