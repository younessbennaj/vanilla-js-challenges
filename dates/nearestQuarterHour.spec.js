const nearestQuarterHour = require('./nearestQuarterHour');

describe('Return the next nearest quarter hour of a date', () => {
  test('should return the next quarter date for a given date', () => {
    const result = nearestQuarterHour(new Date('2024-01-17T12:32:45.678Z'));

    expect(result).toBe('2024-01-17T12:45:00.000Z');
  });

  test('should handle dates exactly on a quarter-hour', () => {
    const testDate = new Date('2024-01-17T12:00:00.000Z');
    const result = nearestQuarterHour(testDate);

    const expectedDate = '2024-01-17T12:15:00.000Z';

    expect(result).toBe(expectedDate);
  });

  test('should return the next quarter date for dates after the nearest quarter', () => {
    const testDate = new Date('2024-01-17T12:40:00.000Z');
    const result = nearestQuarterHour(testDate);

    const expectedDate = '2024-01-17T12:45:00.000Z';

    expect(result).toBe(expectedDate);
  });

  test('should move to the next hour if the current time is after 45 minutes', () => {
    const testDate = new Date('2024-01-17T11:55:00.000Z');
    const result = nearestQuarterHour(testDate);

    const expectedDate = '2024-01-17T12:00:00.000Z';

    expect(result).toBe(expectedDate);
  });

  test('should move to the next hour if the current time is 59 minutes', () => {
    const testDate = new Date('2024-01-17T11:59:00.000Z');
    const result = nearestQuarterHour(testDate);

    const expectedDate = '2024-01-17T12:00:00.000Z';

    expect(result).toBe(expectedDate);
  });
})