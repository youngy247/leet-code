/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let doubleNums = [];

  for (let i = 0; i <= nums.length - 1; i++) {
    doubleNums.push(nums[i]);
  }

  for (let i = 0; i <= nums.length - 1; i++) {
    doubleNums.push(nums[i]);
  }

  return doubleNums;
};
