function findNeedle(haystack) {
  return `found the needle at position ${
    haystack.findIndex(v => v== 'needle' )
  }`;
}