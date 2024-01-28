const generateChunkedArrayOfNumbers = require('./generateChunkedArrayOfNumbers')

test('Generate chunked array on numbers from 0 with length of 6 and chunk size of 2', () => {
  expect(generateChunkedArrayOfNumbers({chunkSize: 2, length: 6})).toStrictEqual([[0, 1], [2, 3], [4, 5]]);
})

test('Generate array on numbers from 2 to 7 and chunk size of 3', () => {
  expect(generateChunkedArrayOfNumbers({chunkSize: 3, end: 7, start: 2})).toStrictEqual([[2, 3, 4], [5, 6, 7]]);
})

test('Generate array on numbers from 5 to 14 and chunk size of 5', () => {
  expect(generateChunkedArrayOfNumbers({chunkSize: 5, start: 5, length: 10})).toStrictEqual([[5, 6, 7, 8, 9], [10, 11, 12, 13, 14]]);
})