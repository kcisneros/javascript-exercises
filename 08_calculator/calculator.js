const add = function(firstNum, secondNum) {
  return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
  return firstNum - secondNum;	
};

const sum = function(numbers) {
  let theSum = 0;
  for (i = 0; i < numbers.length; i++) {
    theSum += numbers[i];
  }
  return theSum;
};

const multiply = function(numbers) {
  // have to start at 1 because anything times 0 is 0
  let theSum = 1;
  for (i = 0; i < numbers.length; i++) {
    theSum *= numbers[i];
  }
  return theSum;
};

const power = function(numberOne, numberTwo) {
  return Math.pow(numberOne, numberTwo);
};

const factorial = function(numbers) {
  let theSum = 1;
  for (i = 1; i < numbers +1; i++) {
    theSum *= i;
  }
  console.log(theSum);
  return theSum;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
