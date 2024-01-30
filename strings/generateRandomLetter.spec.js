const generateRandomLetter = require('./generateRandomLetter')

// (/^[A-Za-z]+$/)
describe('Generate random letter', () => {
  it('should be a random letter from a to z in lower case', () => {
    for(let i = 0; i < 1000; i++) {
      const password = generateRandomLetter()
      expect(password).toMatch(/^[a-z]+$/)
      i++;
    }
  })
})