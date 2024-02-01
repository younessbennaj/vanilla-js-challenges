const generateRandomNumber = require("../numbers/generateRandomNumber");
const generateRandomLetter = require("./generateRandomLetter");
const generateRandomSpecialCharacters = require('./generateRandomSpecialCharacters')

function generateStrongPassword(length) {
  let password = [];

  if(length < 8) {
    throw new Error('password length should be greater than 8');
  }

  const ratio = Math.floor(length/4);
  const remain = length%4

  for(let i = 0; i < ratio + remain; i++) {
    password.push(generateRandomLetter())
  }

  for(let i = 0; i < ratio; i++) {
    password.push(generateRandomLetter().toUpperCase())
  }

  for(let i = 0; i < ratio; i++) {
    password.push(generateRandomNumber({min: 0, max: 9}))
  }

  for(let i = 0; i < ratio; i++) {
    password.push(generateRandomSpecialCharacters())
  }

  const shuffledPassord = password.sort(function(){return 0.5-Math.random()}).join('');

  return shuffledPassord;
}

describe('Generate a strong password', () => {
  /*
    Password must contain: 
    - at least 8 characters
    - at least 1 digit
    - at least 1 uper case letter
    - at least 1 lower case letter
    - at least 1 special character 
  */
 it('should throw error if length arguments is smaller than 8', () => {
  expect(() => generateStrongPassword(5)).toThrow(Error);
 })

 it('should contain at least 8 characters', () => {
  expect(generateStrongPassword(20).length >= 8).toBe(true)
 })

 it('should respect given length', () => {
  for(let length = 8; length <= 40; length++) {
    expect(generateStrongPassword(length).length).toBe(length)
  }
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
  console.log(password1)
  expect(password1).not.toBe(password2)
 })
})