const getUnionOfTwoSets = require('./getUnionOfTwoSets');

describe('Get union of two sets', () => {
  it('should create the union of the two sets', () => {
    expect(getUnionOfTwoSets(new Set('123'), new Set('234'))).toStrictEqual(new Set('1234'));
    expect(getUnionOfTwoSets(new Set([1, 2, 3]), new Set([3, 4, 5]))).toStrictEqual(new Set([1, 2, 3, 4, 5]));
    expect(getUnionOfTwoSets(new Set([false, false, NaN]), new Set([true, true, NaN]))).toStrictEqual(new Set([false, NaN, true]));
  })
})