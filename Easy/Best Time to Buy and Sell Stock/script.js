/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxRange = 0;
  let smallest = prices[0];

  for (let i = 1; i <= prices.length - 1; i++) {
    if (prices[i] < smallest) {
      smallest = prices[i];
    }
    if (prices[i] - smallest > maxRange) {
      maxRange = prices[i] - smallest;
    }
  }

  return maxRange;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
