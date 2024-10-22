/**
 *
 * @param {number[]} list
 * @returns {object}
 */

const listNumbers = function (numbersList) {
  const zeros = [];
  const positives = [];
  const negatives = [];

  for (const number of numbersList) {
    if (number === 0) {
      zeros.push(number);
    } else if (number > 0) {
      positives.push(number);
    } else if (number < 0) {
      negatives.push(number);
    }
  }

  return { zeros, positives, negatives };

  // const result = {
  //   zeros: numbersList.filter((number) => number === 0),
  //   positives: numbersList.filter((number) => number > 0),
  //   negatives: numbersList.filter((number) => number < 0),
  // };
  // return result;
};

const numeros = [0, 1, 2, 3, 4, 5, 6, -1, -2];
listNumbers(numeros);
console.log(listNumbers(numeros));
