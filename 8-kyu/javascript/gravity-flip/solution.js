const flip=(d, a)=>{
  if (d == 'R') return a.sort((a,b) => a-b)
  return a.sort((a,b) => b-a)
}