const nextPrimeNumber = require('./next-prime-number');

describe('Return the next higher prime number', () => {
  test('prime', () => {
    expect(nextPrimeNumber(38)).toBe(41);
    expect(nextPrimeNumber(7)).toBe(7);
    expect(nextPrimeNumber(115)).toBe(127);
    expect(nextPrimeNumber(2000)).toBe(2003);
  })
})