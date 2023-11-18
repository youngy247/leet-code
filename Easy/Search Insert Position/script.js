/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return nums.indexOf(nums[i]);
    } else if (nums[i] > target) {
      return nums.indexOf(nums[i]);
    }
  }

  return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 5));
