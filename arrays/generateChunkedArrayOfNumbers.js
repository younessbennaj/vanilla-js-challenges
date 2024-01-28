function generateChunkedArrayOfNumbers({chunkSize, end, length, start}) {
  // Create sub arrays depending of chunk size and length
  return Array.from({length: (length || (end - start + 1)) / chunkSize}, (_, index) => []).map((_, arrayIndex) => {
    return Array.from({length: chunkSize}, (_, chunkIndex) => {
      return chunkIndex + (arrayIndex * chunkSize) + (start || 0);
    })
  });
}

module.exports = generateChunkedArrayOfNumbers;