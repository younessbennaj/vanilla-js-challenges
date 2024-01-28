const splitArrayIntoChunks = require('./splitArrayIntoChuncks')

const ARRAY = [1, 2, 3, 4, 5, 6];

test('Split array into chuck of size 2', function() {
  expect(splitArrayIntoChunks(ARRAY, 2)).toStrictEqual([[1, 2], [3, 4], [5, 6]]);
})

test('Split array into chuck of size 3', function() {
  expect(splitArrayIntoChunks(ARRAY, 3)).toStrictEqual([[1, 2, 3], [4, 5, 6]]);
})