function difference(array, values) {
  return array.length === 0
    ? array
    : array.filter((el) => !values.includes(el));
}
// return a new array with values from "array" that not contained in "values"
// difference([1, 2, 3], [2,3]) => [1] => only "1" is not contained in "values" but originally presents in "array"

describe("Difference", () => {
  test("should new instance of array", () => {
    const arr = [1, 2, 3];
    const result = difference(arr, [2, 3]);
    expect(arr).not.toBe(result);
  });

  test("array not empty", () => {
    expect(difference([1, 2, 3], [2, 3])).toStrictEqual([1]);
    expect(difference([1, 2, 3, 4], [2, 3, 1])).toStrictEqual([4]);
    expect(difference([1, 2, 3], [2, 3, 1, 4])).toStrictEqual([]);
    expect(difference([1, , 3], [1])).toStrictEqual([3]);
  });

  test("should return same instance if array arg is empty", () => {
    const arr = [];
    const result = difference(arr, [2, 3]);
    expect(arr).toBe(result);
  });

  test("array empty", () => {
    expect(difference([], [2, 3])).toStrictEqual([]);
  });
});
