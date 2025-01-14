function grow(x){
  return x.reduce((acc, val) => val = val * acc, 1);
}