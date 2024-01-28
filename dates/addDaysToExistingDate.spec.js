const addDaysToExistingDate = require('./addDaysToExistingDate');

describe('Add n days to an existing date', () => {
  it('It should add b days to a and return the number of milliseconds', () => {
    expect(addDaysToExistingDate(new Date(Date.UTC(2000, 0o1, 0o1)), 31)).toBe(952041600000);
    expect(addDaysToExistingDate(new Date(Date.UTC(2000,0o1,0o1)), 10)).toBe(950227200000);
    expect(addDaysToExistingDate(new Date(Date.UTC(2000,0o2,28,)), 2)).toBe(954374400000);
  })
}) 