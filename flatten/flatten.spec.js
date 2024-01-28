const flatten = require('./flatten');

describe('flatten', () => {
  test('Single-level arrays are unaffected.', () => {
    expect(flatten([1, 2, 3])).toStrictEqual([1, 2, 3]);
  })

  test('Inner arrays are flattened into a single level.', () => {
    expect(flatten([1, [2, 3]])).toStrictEqual([1, 2, 3]);
    expect(flatten([
      [1, 2],
      [3, 4],
    ])).toStrictEqual([1, 2, 3, 4]);
  })

  test('Flattens recursively.', () => {
    expect(flatten([1, [2, [3, [4, [5]]]]])).toStrictEqual([1, 2, 3, 4, 5]);
  })
})