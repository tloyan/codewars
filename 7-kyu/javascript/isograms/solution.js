function isIsogram(str){
  let letters = {}

  for (let i = 0; i < str.length; i = i + 1) {
    if (typeof letters[str[i].toLowerCase()] != 'undefined') return false;
    letters[str[i].toLowerCase()] = true;
  }
  return true;
}