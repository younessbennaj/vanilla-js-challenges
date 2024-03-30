function fill(array, value, start = 0, end = array.length) {
  const s = start < 0 ? array.length + start : start;
  const e = end < 0 ? array.length + end : end;
  for (let i = 0; i < array.length; i++) {
    array[i] = i < s ? array[i] : i >= e ? array[i] : value;
  }

  return array;
}

describe("Fills an array with values from start up to, but not including, end", () => {
  test.only("fill with '*'", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(fill(arr, "*")).toStrictEqual(["*", "*", "*", "*", "*", "*"]);
  });

  test.only("use start arg", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(fill(arr, "*", 3)).toStrictEqual([1, 2, 3, "*", "*", "*"]);
  });

  test.only("use end arg", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(fill(arr, "*", 0, 4)).toStrictEqual(["*", "*", "*", "*", 5, 6]);
  });
});
