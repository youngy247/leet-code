/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  obj = {};

  for (let i = 0; i <= nums.length - 1; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
  }

  for (key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
};

singleNumber([2, 2, 1]);
