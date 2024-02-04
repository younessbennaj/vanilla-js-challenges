// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

// What does exact same day mean ?
// same day, same month and same year
function isExactSameDay(a, b) {
  return a.getTime() === b.getTime();
}

describe('Check if two dates fall on the exact same day', () => {
  it('should return a boolean', () => {
    const date1 = new Date('2000/01/01')
    const date2 = new Date('2000/01/01')
    expect(typeof isExactSameDay(date1, date2) === 'boolean').toBeTruthy()
  })
  
  it('should return true if dates fall in the exact same day', () => {
    const date1 = new Date('2000/01/01')
    const date2 = new Date('2000/01/01')
    expect(isExactSameDay(date1, date2)).toBe(true)
  })

  it('should return true if dates fall in the exact same day', () => {
    const date1 = new Date('2000/01/01')
    const date2 = new Date('2000/01/01')
    expect(isExactSameDay(date1, date2)).toBe(true)
  })

  it('should return false otherwise', () => {
    expect(isExactSameDay(new Date('2001/01/01'), new Date('2000/01/01'))).toBe(false)
    expect(isExactSameDay(new Date('2000/01/01'), new Date('2000/01/02'))).toBe(false)
    expect(isExactSameDay(new Date('2000/11/01'), new Date('2000/01/01'))).toBe(false)
  })
});