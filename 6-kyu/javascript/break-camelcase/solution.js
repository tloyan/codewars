// complete the function
function solution(string) {
  return string.split('').reduce((a, v, i) => {
    if (v == v.toUpperCase() && i > 0 && string[i - 1] != ' ')
      return a + ' ' + v;
    return a + v;
  }, '');
}
