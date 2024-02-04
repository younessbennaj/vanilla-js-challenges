function createRangeOfNumbers(start, end) {
  // Old fashion way:
  // const range = []
  // for (let i = start; i < end + 1; i++) {
  //   range.push(i);
  // }
  // return range;
  return Array.from({length: end - start + 1}, (_, index) => index + start);
}

describe('Create a range of numbers', () => {
  it('should return an array', () => {
    expect(createRangeOfNumbers(2, 10)).toBeInstanceOf(Array)    
  });

  it('should return an array that represents a range of numbers between two values', () => {
    expect(createRangeOfNumbers(2, 10)).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(createRangeOfNumbers(1, 3)).toStrictEqual([1, 2, 3]);
    expect(createRangeOfNumbers(-5, 5)).toStrictEqual([-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]);
    expect(createRangeOfNumbers(2, 7)).toStrictEqual([2, 3, 4, 5, 6, 7]);
  })
});