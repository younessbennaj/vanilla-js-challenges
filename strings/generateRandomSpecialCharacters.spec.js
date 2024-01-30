const generateRandomSpecialCharacters = require('./generateRandomSpecialCharacters')

describe('Generate random special characters', () => {
  it('should generate a special characters', () => {
    for(let i = 0; i < 1000; i++) {
      expect(generateRandomSpecialCharacters()).toMatchSpecialCharacters();
      i++;
    }
  })
})