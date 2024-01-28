const createSets = require('./createSets');

describe('Creating Javascript Sets', () => {
  it('should create a Set from those elements', () => {
    expect(createSets(1, 'b', 3)).toStrictEqual(new Set([1, 'b', 3]));
    expect(createSets(NaN, null, false)).toStrictEqual(new Set([NaN, null, false]));
    expect(createSets('a', ['b'], { c: 3 })).toStrictEqual(new Set(['a', ['b'], { c: 3 }]));
  })
})