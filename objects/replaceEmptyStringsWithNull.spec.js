// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function replaceEmptyStringsWithNull(obj) {
  const parsedEntries = Object.entries(obj).map(([key, value]) => Boolean(value.trim()) ? [key, value] : [key, null]);
  return Object.fromEntries(parsedEntries);
}

describe('Replace empty strings in object with null', () => {
  it('should return object', () => {
    expect(replaceEmptyStringsWithNull({ a: 'a', b: 'b', c: '' })).toBeInstanceOf(Object)
  })

  it('should replace empty strings with null', () => {
    expect(replaceEmptyStringsWithNull({ a: 'a', b: 'b', c: '' })).toStrictEqual({ a: 'a', b: 'b', c: null })
    expect(replaceEmptyStringsWithNull({ a: '', b: 'b', c: ' ', d: 'd' })).toStrictEqual({ a: null, b: 'b', c: null, d: 'd' })
    expect(replaceEmptyStringsWithNull({ a: 'a', b: 'b ', c: ' ', d: '' })).toStrictEqual({ a: 'a', b: 'b ', c: null, d: null })
  })
});