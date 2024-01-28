const classNames = require('./classnames');

describe('classnames', () => {
  describe('simple string arguments', () => {
    it('should return joined classnames', () => {
      expect(classNames([])).toBe('');
      expect(classNames('foo', 'bar')).toBe('foo bar');
      expect(classNames('foo', 'bar qux')).toBe('foo bar qux');
    })
  })

  describe('object arguments', () => {
    it('should return joined classnames', () => {
      expect(classNames('foo', { bar: true })).toBe('foo bar');
      expect(classNames({ 'foo-bar': true })).toBe('foo-bar');
      expect(classNames({ foo: true }, { bar: true })).toBe('foo bar');
      expect(classNames({ foo: true, bar: true })).toBe('foo bar');
      expect(classNames({ 'foo bar': true })).toBe('foo bar');
    })

    it('should not join classNames if condition is false ', () => {
      expect(classNames({ 'foo-bar': false })).toBe('');
      expect(classNames({ foo: true, bar: false, qux: true })).toBe('foo qux');
    })
  })

  describe('array values', () => {
    it('should return joined classnames', () => {
      expect(classNames(['foo', 'bar', 'baz'])).toEqual('foo bar baz');
    })
  });

  describe('more complex examples', () => {
    test('mixed and flatten', () => {
      expect(classNames('a', ['b', { c: true, d: false }])).toBe('a b c'); 
      expect(classNames(
        'foo',
        {
          bar: true,
          duck: false,
        },
        'baz',
        { quux: true },
      )).toBe('foo bar baz quux');
    })

    test('Falsey values are ignored', () => {
      expect(classNames(null, false, 'bar', undefined, { baz: null }, '')).toBe('bar');
      expect(classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')).toEqual('bar 1');
    })
  })
  
})