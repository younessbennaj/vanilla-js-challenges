const generateRandomNumber = require('./generateRandomNumber')

describe('Generate random number', () => {
  it('should throw error if min or max value is missing', () => {
    expect(() => generateRandomNumber()).toThrow(Error);
  })

  it('should generate an integer, not a float.', () => {
    const number = generateRandomNumber({min: 0, max: 4})
    expect(Number.isInteger(number)).toBe(true)
  })

  it('should generate random number between 1 and 100', () => {
    const number = generateRandomNumber({min: 1, max: 100})
    expect(number).toBeGreaterThanOrEqual(1)
    expect(number).toBeLessThanOrEqual(100)
  })
})