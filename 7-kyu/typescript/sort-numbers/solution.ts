export function solution(nums: number[]): number[] {
  return nums.sort((a: number, b: number): number => a - b)
}