/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  arr = [];

  for (let i = 0; i <= n; i++) {
    if (arr.length == 0 && n >= 0) {
      arr.push(0);
    } else if (arr.length == 1 && n >= 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr[n];
}
