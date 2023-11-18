/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let result = [];

  nums.reduce((total, num) => {
    total += num;
    result.push(total)
    return total
  }, 0)

  return result
};

console.log(runningSum([1,2,3,4]), [1,3,6,10]);