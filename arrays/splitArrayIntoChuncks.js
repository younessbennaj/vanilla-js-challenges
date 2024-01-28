function splitArrayIntoChunks(array, chunckSize) {
  const chunckedArray = []
  for(let i = 0; i < array.length; i = i + chunckSize) {
    chunckedArray.push(array.slice(i, i+chunckSize));
  }
  return chunckedArray;
}

module.exports = splitArrayIntoChunks;