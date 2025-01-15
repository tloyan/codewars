function removeSmallest(numbers) {
  let cpy = [...numbers];
  let del = false;
  return cpy.reduce((acc, val) => {
    if (!del && val == Math.min(...cpy))
      return del = true && acc;
    return [...acc, val];
  }, []);
}