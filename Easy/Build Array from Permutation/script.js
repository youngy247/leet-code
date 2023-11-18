/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  return nums.map((v) => nums[v]);
};
