function incrementLetters(word) {
  return word.split('').map(c => {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }).join('');
}

module.exports = incrementLetters;