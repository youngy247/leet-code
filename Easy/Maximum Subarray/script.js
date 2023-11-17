/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // nums is an array - we need to find the subarray with the largest sum 
  let max = nums[0];
  let sum = 0;


  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    
  }


  return sum 
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6));
