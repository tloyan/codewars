function findDifference(a, b) {
  return Math.abs(a.reduce((a,v)=>a*v,1)-b.reduce((a,v)=>a*v,1))
}