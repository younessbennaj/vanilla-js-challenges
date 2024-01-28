const generateTable = require('./generateTable');

test('Generate table with 3 rows and 5 columns', () => {
  expect(generateTable(3, 5)).toStrictEqual([[1, 6, 7, 12, 13], [2, 5, 8, 11, 14], [3, 4, 9, 10, 15]]);
});

test('Generate table with 6 rows and 2 columns', () => {
  expect(generateTable(6, 2)).toStrictEqual([[1, 12], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7]]);
});

test('Generate table with 4 rows and 1 columns', () => {
  expect(generateTable(4, 1)).toStrictEqual([[1], [2], [3], [4]]);
});


