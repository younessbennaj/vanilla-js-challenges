function findIndex(arr, func, fromIndex = 0) {
  let start = fromIndex < 0 ? arr.length + fromIndex : fromIndex;

  let resultedIndex = -1;

  for (let i = start; i < arr.length; i++) {
    if (func(arr[i])) {
      resultedIndex = i;
      break;
    }
  }
  return resultedIndex;
}

describe("Find Index", () => {
  it("should return a number", () => {
    const arr = [1, 2, 3, 4];
    const index = findIndex(arr, (val) => {
      return val === 2;
    });

    expect(typeof index).toBe("number");
  });

  test("unique", () => {
    const arr = [1, 2, 3, 4];
    const index = findIndex(arr, (val) => {
      return val === 2;
    });

    expect(index).toBe(1);
  });

  test("multiple", () => {
    const arr = [1, 2, 3, 4, 2, 5, 8, 1, 3, 5];
    const index = findIndex(arr, (val) => {
      return val === 3;
    });

    expect(index).toBe(2);
  });

  test("index from", () => {
    const arr = [1, 2, 3, 4, 2, 5, 8, 1, 3, 5];
    const index = findIndex(
      arr,
      (val) => {
        return val === 3;
      },
      4
    );

    expect(index).toBe(8);
  });

  test("handles negative start index", () => {
    expect(findIndex([5, 12, 8, 130, 44], (num) => num > 3, -2)).toBe(3);
    expect(findIndex([5, 12, 8, 130, 44], (num) => num < 100, -2)).toBe(4);
  });
});
