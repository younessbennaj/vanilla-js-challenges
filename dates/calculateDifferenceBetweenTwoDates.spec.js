const calculateDifferenceBetweenTwoDates = require('./calculateDifferenceBetweenTwoDates');

describe('Calculate difference between two dates in hours, minutes, and seconds', () => {
  it('should return an object with the properties "hrs", "min", and "sec"', () => {
    expect(calculateDifferenceBetweenTwoDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10'))).toStrictEqual({ hrs: 0, min: 45, sec: 10 });
    expect(calculateDifferenceBetweenTwoDates(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00'))).toStrictEqual({ hrs: 1, min: 50, sec: 23 });
    // expect(calculateDifferenceBetweenTwoDates(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00'))).toStrictEqual({ hrs: 3, min: 4, sec: 12 });
  })
})