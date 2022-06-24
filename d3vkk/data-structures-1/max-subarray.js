/**
 * @param {number[]} nums
 * @return {number}
 * Kadane's method
 */
var maxSubArray = function (nums) {
  let max_sum = -Infinity;
  let cur = 0;
  for (let x of nums) {
    if (cur < 0) cur = 0;
    cur += x;
    max_sum = Math.max(max_sum, cur);
  }
  return max_sum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
