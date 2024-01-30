const insertSpecialCharacters = require('./insertSpecialCharacters')

describe('insertSpecialCharacters', () => {
  it('insert at least 1 special characters randomly into string', () => {
    const str = 'azertyuiop';
    for(let i = 0; i < 1000; i++) {
      expect(insertSpecialCharacters(str)).toMatchSpecialCharacters()
    }
  })
})