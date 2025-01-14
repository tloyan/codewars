function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    str = [...str.toLowerCase()];
    str[i] = str[i].toUpperCase();
    str = str.join('');
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90)
      result.push(str);
  }
  return result;
}