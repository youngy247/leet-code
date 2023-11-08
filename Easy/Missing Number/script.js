/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i + 1] !== i + 1) {
      return nums[i] + 1;
    }
  }
};

console.log(missingNumber([3, 0, 1]));
