/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let strNum = num.toString();
  let arr = [];
  let res = 0;

  if (strNum.length < 2) return num;

  for (let i = 0; i < strNum.length; i += 1) {
    arr.push(strNum.charAt(i));
  }

  for (let i = 0; i < arr.length; i++) {
    res += Number(arr[i]);
  }

  return addDigits(res);
};

console.log(addDigits(38));
