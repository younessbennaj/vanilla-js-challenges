const generateRandomNumber = require('../numbers/generateRandomNumber');

function generateRandomLetter() {
  // String.fromCharCode(65) // A
  // String.fromCharCode(65 + 25) // Z
  return String.fromCharCode(65 + generateRandomNumber({min: 0, max: 25})).toLowerCase();
}

module.exports = generateRandomLetter