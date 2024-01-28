const generateArrayOfNumbers = require('./generateArrayOfNumbers')

test('Generate array on numbers from 0 with length of 6', () => {
  expect(generateArrayOfNumbers({length: 6})).toStrictEqual([0, 1, 2, 3, 4, 5]);
  expect(generateArrayOfNumbers({length: 6}).length).toBe(6);
})

test('Generate array on numbers from 2 to 6', () => {
  expect(generateArrayOfNumbers({end: 6, start: 2})).toStrictEqual([2, 3, 4, 5, 6]);
})

test('Generate array on numbers from 10 with length of 4', () => {
  expect(generateArrayOfNumbers({start: 10, length: 4})).toStrictEqual([10, 11, 12, 13]);
  expect(generateArrayOfNumbers({start: 10, length: 4}).length).toBe(4);
})