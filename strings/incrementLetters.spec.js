const incrementLetters = require('./incrementLetters')

describe('Find the correct word by incrementing letters in alphabet', () => {
  test('Return the correct word', () => {
    expect(incrementLetters('bnchmf')).toBe('coding')
    expect(incrementLetters('bgddrd')).toBe('cheese')
    expect(incrementLetters('sdrshmf')).toBe('testing')
  })
})