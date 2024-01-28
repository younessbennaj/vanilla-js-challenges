const insertCharactersBackwards = require('./insertCharactersBackwards');

describe('Insert character after every n characters (backwards)', () => {
  test('should insert character', () => {
    expect(insertCharactersBackwards('1234567', '.', 3)).toBe('1.234.567')
    expect(insertCharactersBackwards('abcde', '$', 3)).toBe('ab$cde')
    expect(insertCharactersBackwards('zxyzxyzxyzxyzxyz', 'w', 3)).toBe('zwxyzwxyzwxyzwxyzwxyz')
  })
})