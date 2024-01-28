const numberOfDaysBetweenTwoDates = require('./numberOfDaysBetweenTwoDates');

describe('numberOfDaysBetweenTwoDates', () => {
  it('numberOfDaysBetweenTwoDates', () => {
    expect(numberOfDaysBetweenTwoDates(new Date('2020-06-11'), new Date('2020-06-01'))).toBe(10);
    expect(numberOfDaysBetweenTwoDates(new Date('2000-01-01'), new Date('2020-06-01'))).toBe(7457);
  })
})