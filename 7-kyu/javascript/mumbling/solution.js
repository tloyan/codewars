function accum(s) {
	return s.split('').reduce((acc, val, n) => {
    if (acc != '')
      acc = acc + '-';
    return acc + val.toUpperCase() + val.toLowerCase().repeat(n);
  }, '')
}