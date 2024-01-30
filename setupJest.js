expect.extend({
  toMatchSpecialCharacters(str) {
    return str.match(/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g) ? { pass: true, message: () => 'match' } : {pass: false, message: () => 'not match'}
  }
})