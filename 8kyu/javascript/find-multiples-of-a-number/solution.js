function findMultiples(integer, limit) {
  let res = [];
  for (let i = 1; integer * i <= limit; i++) {
    res = [...res, integer * i];
  }
  return res;
}
