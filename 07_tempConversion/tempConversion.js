const convertToCelsius = function(temp) {
    // (32°F − 32) × 5/9 = 0°C is the formula
    // this first variable has the math done to find the celcius value
  let initialConversionToCelcius = (temp - 32) * (5/9);
  // this variable rounds to the tenths place
  let roundedCelcius = Math.round(initialConversionToCelcius * 10) / 10;
//  console.log(roundedCelcius);
  return roundedCelcius;
};

const convertToFahrenheit = function(temp) {
    // (0°C × 9/5) + 32 = 32°F is the formula
  let initialConversionToFahrenheit = (temp * (9/5)) + 32;
  let roundedFahrenheit = Math.round(initialConversionToFahrenheit * 10) / 10;
//  console.log(roundedFahrenheit);
  return roundedFahrenheit;
};
convertToFahrenheit(0)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
