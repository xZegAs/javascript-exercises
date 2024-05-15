const convertToCelsius = function(feh) {

  let temp = 0;
  temp = (feh - 32) * (5 / 9);
  return Math.round(temp * 10) / 10;

};

const convertToFahrenheit = function(cel) {
  let temp = 0;
  temp = ((9 / 5) * cel) + 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
