function isVow(a){
  return a.map(v=> "aeiou".includes(String.fromCharCode(v))?String.fromCharCode(v):v)
}