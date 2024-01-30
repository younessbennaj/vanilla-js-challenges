const generateRandomSpecialCharacters = require('./generateRandomSpecialCharacters')

function insertSpecialCharacters(str) {
  const arr = str.split('').map(c => {
    return Math.random() > 0.2 ? c : generateRandomSpecialCharacters()
  })
  if(!arr.join('').match(/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g)) {
    return insertSpecialCharacters(str)
  } else {
    return arr.join('');
  }
}

module.exports = insertSpecialCharacters;