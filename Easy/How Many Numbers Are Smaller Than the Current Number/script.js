/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {

  let sortedNums = [...nums].sort((a,b)=> a-b)
  sortedNums
  const counts = {};
  
  for (let i = 0; i < sortedNums.length; i++) {
    if (counts[sortedNums[i]] === undefined) {
      counts[sortedNums[i]] = i;
    }
  }

  counts

  return nums.map(num => counts[num]);

    
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]), [4,0,1,1,3]);