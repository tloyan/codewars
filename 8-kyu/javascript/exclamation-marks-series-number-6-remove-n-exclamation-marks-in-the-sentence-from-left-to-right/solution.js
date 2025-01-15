function remove(s,n){
  while (n-- > 0) {
    s = s.replace(/!/, '');
  }
  return s;
}