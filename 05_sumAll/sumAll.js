// clunky code, not my favorite but it works.
// this function takes two arguments as defined in the tests
const sumAll = function(number1, number2) {
  // set sum value to 0
  let currentSum = 0;

  // first check to see if the first param is greater than the second param.
  // if it is, do the following
  if (number1 > number2) {
    // set a variable called lesserNum to number2 param passed in
    lesserNumber = number2;
    // greaterNumber is set to number1 param passed in
    greaterNumber = number1;
  }
  // else
  else {
    // lesserNumber is number1
    lesserNumber = number1;
    // greaterNumber is number2
    greaterNumber = number2;
  }

  // next if block.. checks to make sure param is a number. if it's not error
  if (typeof lesserNumber !== 'number' || typeof greaterNumber !== 'number') {
    console.log("ERROR");
    return("ERROR");
  }

  // for loop
  for (i = lesserNumber; i <= greaterNumber; i++) {
    // if the lesserNumber or the greaterNumber is less than 0; return error
    if (lesserNumber < 0 || greaterNumber < 0) {
      console.log("ERROR");
      return ("ERROR");
    }

    // if the lesserNumber AND the greaterNumber are greater than 0
    if (lesserNumber && greaterNumber > 0) {
      // while loop. while lesserNumber is less than greaterNumber
      while (i <= greaterNumber) {
        // add lesserNumber (i) to currentSum
        currentSum += i;
        // increment lesserNumber (i) by 1 to move through range nums.
        i++;
      }
    }
    // return the currentSum to the function
  return currentSum;
  }
};

// Do not edit below this line
module.exports = sumAll;

