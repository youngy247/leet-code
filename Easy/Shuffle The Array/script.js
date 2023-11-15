/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let left = nums.slice(0, n);
  let right = nums.slice(n);

  let shuffled = [];

  for (let i = 0; i < n; i++) {
    shuffled.push(left[i]);
    shuffled.push(right[i]);
  }


  return shuffled
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3), [2, 3, 5, 4, 1, 7]);
