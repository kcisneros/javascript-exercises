const sumAll = function(...numbers) {
  let finalSum = 0;
  // get the last item in array
  // get the first item in array
  // start with 0 counter
  // if first item is less than or equal to last item
  // increment 1
  // add current item to last item
  // when loop is done print last item
  let currentSum = 0;
  let sortedNumbers = numbers.sort();

  // this code block works for the last test when tested individually
  // but not as a part of the entire test suite
  // if (typeof numbers !== 'number') {
  //   console.log("ERROR");
  //   return "ERROR";
  // }

  for (i = numbers[0]; i <= sortedNumbers.at(-1); i++) {
    // if (typeof numbers[i] !== 'number') {
    //   console.log("ERROR");
    // }
    // if (numbers.some(i => typeof i !== 'number')) {
    //   console.log("ERROR");
    //   return "ERROR";
    // }
    // if (isNaN(numbers[i])) {
    //   console.log("ERROR");
    //   return "ERROR";
    // }
    if (sortedNumbers[i] < 0 || numbers.some(i => typeof i === 'string')) {
//      console.log("ERROR");
      return "ERROR";
    }
    else {
      currentSum += i;
    }
  }
  return currentSum;
};

// Do not edit below this line
module.exports = sumAll;

sumAll(10, [90, 1]);