/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let arr = s.split(" ");

  console.log(arr[0].charAt(arr[0].length - 1));

  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (
        parseInt(arr[i].charAt(arr[i].length - 1)) >
        parseInt(arr[i + 1].charAt(arr[i + 1].length - 1))
      ) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  // Remove the numbers and join the words to form a sentence
  return arr.map((word) => word.slice(0, -1)).join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
