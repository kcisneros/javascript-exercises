// leap year: year % 4 == 0; year % 400 == 0
// not leap: year % 100 == 0

const leapYears = function(year) {
  // if the year is divisible by 100 AND it's not divisble by 400
  // OR it's not divisible by 4 then it's not a leap year
  if (year % 100 == 0 && year % 400 !== 0 || year % 4 !== 0) {
//    console.log("not leap year");
    return false;
  }
  // else it's a leap year
  else {
//    console.log("leap year");
    return true;
  }
};

// Do not edit below this line
module.exports = leapYears;
