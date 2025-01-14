export function repeatStr(n: number, s: string): string {
  
  let res : string = ''
  
    for( let i : number = 0; i < n ; i ++ ){
      res = res + s
    }
  
  return res
  
}