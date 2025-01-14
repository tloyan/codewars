function tripleTrouble(one, two, three) {
  let res = [];
  for (i = 0; i < one.length; i++) {
    res = [...res, one[i], two[i], three[i]]
  }
  return res.join('');
}