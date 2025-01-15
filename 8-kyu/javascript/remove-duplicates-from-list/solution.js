function distinct(a) {
  return a.reduce((acc, val) => {
    if (!acc.includes(val))
      return [...acc, val];
    return acc;
  }, []);
}