const repeatString = function(string, num) {
  // create array variable to hold an array of string objects
  loopedArray = [];
  // start first condition, if string is blank; return blank string
  if (string === "") {
    return "";
    // else if num is less than 0; return "ERROR"
  } else if (num < 0) {
    return "ERROR"
  }
  // else condition
  else {
    // for loop. the body of the loop (pushing "hey" to the array) will happen so
    // so long as i < num arg passed in by the test
    for (let i = 0; i < num; i++) {
        loopedArray.push("hey");
    }
    // returns a STRING, not array, with the commas taken out and replaced with nothing
    return loopedArray.toString().replace(/,/g, '');
  }

};

// Do not edit below this line
module.exports = repeatString;
