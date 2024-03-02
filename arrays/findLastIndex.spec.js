function findLastIndex(arr, func, fromIndex = arr.length - 1) {
  let result = -1;
  let start;

  if (fromIndex < 0) {
    if (Math.abs(fromIndex) > arr.length) {
      start = 0;
    } else {
      start = arr.length + fromIndex;
    }
  } else {
    start = fromIndex;
  }

  for (let i = start; i >= 0; i--) {
    if (func(arr[i])) {
      result = i;
      break;
    }
  }
  return result;
}

describe("Find last index of", () => {
  test("simple", () => {
    const arr = [1, 4, 5, 8, 10, 2, 7];

    const result = findLastIndex(arr, (value) => value > 5);

    expect(result).toBe(6);
  });

  test("not found", () => {
    const arr = [1, 4, 5, 8, 10, 2, 7];

    const result = findLastIndex(arr, (value) => value === 42);

    expect(result).toBe(-1);
  });

  test("index form", () => {
    const arr = [14, 12, 11, 8, 6, 5, 4];

    const result = findLastIndex(arr, (value) => value < 12, 2);

    expect(result).toBe(2);
  });

  test("handles negative fromIndex", () => {
    expect(findLastIndex([1, 2, 3, 4, 5], (value) => value > 3, -2)).toEqual(3);
  });

  test("handles negative out of bound indices", () => {
    expect(
      findLastIndex([1, 2, 3, 4, 5], (value) => value % 2 === 0, -10)
    ).toEqual(-1);
    expect(findLastIndex([1, 2, 3, 4, 5], (value) => value < 2, -100)).toEqual(
      0
    );
  });
});
