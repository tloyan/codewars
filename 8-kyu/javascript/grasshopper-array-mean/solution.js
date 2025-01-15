var findAverage = function (nums) {
  return nums.reduce((a, v) => a + v, 0) / nums.length;
}