const palindromes = function (string) {
  let stringWithoutPuncOrSpaces = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ +/g, "").toLowerCase();
  let reverseAndJoinStringToArray = Array.from(string).reverse().join("");
  let palindromeWithoutPuncOrSpaces = reverseAndJoinStringToArray.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ +/g, "").toLowerCase();
  if (stringWithoutPuncOrSpaces === palindromeWithoutPuncOrSpaces) {
    return true;
  }
  else {
    return false;
  }
};


//palindromes('racecar!');

// palindromes('ZZZZ car, a man, a maracaz.');

// Do not edit below this line
module.exports = palindromes;
