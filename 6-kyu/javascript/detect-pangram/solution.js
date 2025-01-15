function isPangram(string) {
  let arr = Array(26).fill(0);
  for (let i = 0; i < string.length; i++) {
    let ascii_v = string.toLowerCase().charCodeAt(i);
    if (ascii_v > 96 && ascii_v < 123)
      arr[ascii_v - 97] = arr[ascii_v - 97] + 1;
  }
  return typeof arr.find((v) => v == 0) == 'undefined';
}