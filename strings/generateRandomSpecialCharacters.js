const { specialCharactersCode } = require('./utils')
const generateRandomNumber = require('../numbers/generateRandomNumber')

function generateRandomSpecialCharacters () {
  const randomIndex = generateRandomNumber({min: 0, max: specialCharactersCode.length - 1});
  return String.fromCharCode(specialCharactersCode[randomIndex]);
}

module.exports = generateRandomSpecialCharacters;