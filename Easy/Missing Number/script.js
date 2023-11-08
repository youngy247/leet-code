/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  if (nums.length == 1 && nums[0] !== 0) {
    return 0;
  }

  if (nums.length == 1 && nums[0] == 0) {
    return 1;
  }

  if (nums.length > 1 && nums[0] !== 0) {
    return 0;
  }

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i + 1] !== i + 1) {
      return nums[i] + 1;
    }
  }
};
