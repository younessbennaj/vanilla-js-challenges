const deleteElementFromSet = require('./deleteElementFromSet');

describe('Delete element from Set', () => {
  it('should remove the value from the Set', () => {
    expect(deleteElementFromSet(new Set([1, 2, 3]), 1)).toStrictEqual(new Set([2, 3]));
    expect(deleteElementFromSet(new Set('12345'), '3')).toStrictEqual(new Set(['1', '2', '4', '5']));
    expect(deleteElementFromSet(new Set([1, 2, 3]), 4)).toStrictEqual(new Set([1, 2, 3]));
  })
})