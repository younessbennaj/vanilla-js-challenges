function generateArrayOfNumbers({ end, length, start}) {
  return Array.from({length: length || (end - start + 1)}, (_, index) => index + (start || 0));
}

module.exports = generateArrayOfNumbers;