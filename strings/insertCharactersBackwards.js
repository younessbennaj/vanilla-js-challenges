function insertCharactersBackwards(word, c, n) {
  const composed = word.split('').reverse().reduce((acc, curr, index) => {
    return acc + curr + (!((index + 1)%n) ? c : '');
  }, '')

  return composed.split('').reverse().join('');
}

module.exports = insertCharactersBackwards;