const fibonacci = function(number) {

  let firstNum = 0;
  let secondNum = 1;

  if (number <= 0) {
    return "OOPS";
  }

  if (number <= 10) {
    for (let i = 0; i < number; i++) {
      firstNum = firstNum + secondNum;
      // console.log(firstNum);
      secondNum = firstNum + secondNum;
      i++;
      // console.log(secondNum);
  
    }
    // console.log(firstNum);
    return firstNum;
  } else {
    for (let i = 2; i < number; i++) {
      firstNum = firstNum + secondNum;
      // console.log(firstNum);
      secondNum = firstNum + secondNum;
      i++;
    }
    // console.log(secondNum);
    return secondNum;
  }

};

// Do not edit below this line
module.exports = fibonacci;
