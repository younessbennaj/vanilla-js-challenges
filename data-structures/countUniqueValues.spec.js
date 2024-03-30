// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  let j = 1;
  let counter = 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      counter++;
      i = j;
    }
    j++;
  }

  return counter;
}

describe("countUniqueValues", () => {
  test("should return 2", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
  });

  test("should return 7", () => {
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  });

  test("should return 0", () => {
    expect(countUniqueValues([])).toBe(0);
  });

  test("should return 4", () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });
});
