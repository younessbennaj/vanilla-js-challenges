function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let average = (arr[start] + arr[end]) / 2;
    if (average === num) return true;
    if (average < num) start++;
    else end--;
  }

  return false;
}

describe("averagePair", () => {
  test("averagePair([1, 2, 3], 2.5) should return true", () => {
    expect(averagePair([1, 2, 3], 2.5)).toBe(true);
  });

  test("averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) should return false", () => {
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
  });

  test("averagePair([-1, 0, 3, 4, 5, 6], 4.1) should return false", () => {
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
  });

  test("averagePair([], 4) should return false", () => {
    expect(averagePair([], 4)).toBe(false);
  });
});
