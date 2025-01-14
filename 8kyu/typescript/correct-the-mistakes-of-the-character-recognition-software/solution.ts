export function correct(s: string): string{
  return s.replace(/0/g, 'O').replace(/5/g , 'S').replace(/1/g, 'I')
}