function order(words){
  return words.split(' ').sort((a, b) => {
    return Number(a.match(/[0-9]/)) - Number(b.match(/[0-9]/));
  }).join(' ');
}