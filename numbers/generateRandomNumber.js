function generateRandomNumber({min, max}) {
  if(!Number.isInteger(min)) {
    throw new Error('min value must be provided')
  }

  if(!Number.isInteger(max)) {
    throw new Error('max value must be provided')
  }

  const number = Math.floor(Math.random() * max) + min;

  return number;
}

module.exports = generateRandomNumber;