const generateRandomNumber = require("../numbers/generateRandomNumber");
const generateRandomLetter = require("./generateRandomLetter");
const generateRandomSpecialCharacters = require('./generateRandomSpecialCharacters')
const insertSpecialCharacters = require('./insertSpecialCharacters')

function insertUpperCaseLetters(str) {
  return str.split('').map((c) => {
    return Math.random() > 0.5 ? c : c.toUpperCase()
  }).join('')
}

function insertDigit(str) {
  return str.split('').map((c) => {
    return Math.random() > 0.2 ? c : generateRandomNumber({min: 0, max: 9})
  }).join('')
}

// Travailler sur une autre méthode avec l'ajoute successif puis random sort

function generateStrongPassword(length) {
  let password;
  password = Array.from({length}, () => generateRandomLetter()).join('');
  password = insertUpperCaseLetters(password)
  password = insertSpecialCharacters(password)
  password = insertDigit(password)
  console.log(password)
  return password;
}

describe('Generate a strong password', () => {
  /*
    Password must contain: 
    - at least 8 characters
    - 1 digit
    - 1 uper case letter
    - 1 lower case letter
    - 1 special character 
  */
 it('should contain at least 8 characters', () => {
  expect(generateStrongPassword(20).length >= 8).toBe(true)
 })

 it('should contain at least 1 digit', () => {
  const password = generateStrongPassword(20);
  const containAtLeat1Digit = password.split('').some((c) => {
    return Number.isInteger(Number(c))
  })
  expect(containAtLeat1Digit).toBe(true);
 })

 it('should contain at least 1 upper case letter', () => {
  const password = generateStrongPassword(20);
  expect(password).toMatchSpecialCharacters()
 })

 it('should generate random password each time function is called', () => {
  const password1 = generateStrongPassword(20)
  const password2 = generateStrongPassword(20)
  expect(password1).not.toBe(password2)
 })
})