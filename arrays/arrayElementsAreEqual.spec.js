function arrayElementsAreEqual(arr) {
  return arr.every(el => el === arr[0]);
}

describe('arrayElementsAreEqual', () => {
  test('should check if all array elements are equal', () => {
    expect(arrayElementsAreEqual([true, true, true, true])).toBe(true)
    expect(arrayElementsAreEqual(['test', 'test', 'test'])).toBe(true)
    expect(arrayElementsAreEqual([1,1,1,2])).toBe(false)
    expect(arrayElementsAreEqual(['10',10,10,10])).toBe(false)
  });
});