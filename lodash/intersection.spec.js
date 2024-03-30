/*
Returns a new array containing the unique values present in all
given arrays.

- The input arrays may contain any type of values.
- The input arrays may have varying lengths.
- The input arrays may be empty.
- The function should not modify the original arrays.

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

intersection(arr1, arr2, arr3); // => [3]
*/

function intersection(...arrays) {
  const result = [];
  const [array1, ...rest] = arrays;

  if (array1) {
    for (let val of array1) {
      let isShared = rest.every((arr) => {
        return arr.includes(val);
      });

      if (isShared) {
        result.push(val);
      }
    }
  }

  return Array.from(new Set(result));
}

describe("Get intersection of arrays", () => {
  test("empty array", () => {
    expect(intersection()).toEqual([]);
  });
  test("number values", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const arr3 = [3, 4, 5];
    expect(intersection(arr1, arr2, arr3)).toStrictEqual([3]);
  });

  test("mixins values", () => {
    const arr1 = ["hello", null, 3];
    const arr2 = [null, true, "hello"];
    const arr3 = [null, 4, "hello"];
    expect(intersection(arr1, arr2, arr3)).toStrictEqual(["hello", null]);
  });

  test("duplicate values", () => {
    const actual = intersection([1, 1, 3, 2, 2], [5, 2, 2, 1, 4], [2, 1, 1]);
    expect(actual).toEqual([1, 2]);
  });
});
