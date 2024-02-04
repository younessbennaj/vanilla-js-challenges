// Write a function that takes two sets (a and b) as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in a as well as b
function getIntersection(a, b) {
  const newSet = new Set();
  a.forEach((el) => {
    b.has(el) && newSet.add(el);
  });
  return newSet;
}

describe('Get Intersection of two Javascript Sets', () => {
  it('should return a set', () => {
    expect(getIntersection(new Set([1, 2, 3]), new Set([4, 5, 6]))).toBeInstanceOf(Set)
  })

  it('should return intersection of two sets', () => {
    expect(getIntersection(new Set([1, 2, 3]), new Set([4, 5, 6]))).toStrictEqual(new Set())
    expect(getIntersection(new Set('12345'), new Set([...'45678']))).toStrictEqual(new Set('45'))
    expect(getIntersection(new Set([1, 2, 3]), new Set([2, 3, 4]))).toStrictEqual(new Set([2, 3]))
  })
});