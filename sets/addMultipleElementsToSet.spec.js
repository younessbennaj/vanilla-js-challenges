const addMultipleElementsToSet = require('./addMultipleElementsToSet');

describe('Add multiple elements to Set', () => {
  it('should add each element in the array to the Set', () => {
    expect(addMultipleElementsToSet(new Set([1, 2, 3]), [4, 5, 6])).toStrictEqual(new Set([1, 2, 3, 4, 5, 6 ]));
    expect(addMultipleElementsToSet(new Set('12345'), [...'6789'])).toStrictEqual(new Set([...'123456789']));
    expect(addMultipleElementsToSet(new Set([1, 2, 3]), [2, 3])).toStrictEqual(new Set([1, 2, 3]));
  });
});