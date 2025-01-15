function index(array, n){
  if(n >= array.length){
    return -1
  }
  
  return array[n] ** n
}