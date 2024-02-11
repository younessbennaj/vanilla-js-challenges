/*
Here is the basic idea behind selection sort:

- Find the minimum element in the array.
- Swap it with the element at the first position.
- Find the second minimum element in the array.
- Swap it with the element at the second position.
- Continue this process until the entire array is sorted
*/

function selectionSort(arr) {
  let copy = arr.slice();

  for (let i = 0; i < copy.length; i++) {
    const unsorted = copy.slice(i, copy.length);
    let min = unsorted.reduce((acc, cur) => Math.min(acc, cur));
    let indexOfMin = unsorted.indexOf(min) + i;
    const temp = copy[indexOfMin];
    copy[indexOfMin] = copy[i];
    copy[i] = temp;
  }

  return copy;
}

describe("Selection Sort", () => {
  test("should not mutate original array", () => {
    const original = [9, 3, 6, 2, 1, 11];
    const sorted = selectionSort(original);
    expect(sorted).not.toBe(original);
    expect(original).toStrictEqual([9, 3, 6, 2, 1, 11]);
  });

  test("should sort array in ascending order", () => {
    const original = [9, 3, 6, 2, 1, 11];
    const sorted = selectionSort(original);
    expect(sorted).toStrictEqual([1, 2, 3, 6, 9, 11]);
  });

  test("copy start by min before sort", () => {
    const original = [1, 3, 6, 2, 9, 11];
    const sorted = selectionSort(original);
    expect(sorted).toStrictEqual([1, 2, 3, 6, 9, 11]);
  });

  test("temp elements", () => {
    expect(selectionSort([1, 1])).toEqual([1, 1]);
    expect(selectionSort([2, 2, 2])).toEqual([2, 2, 2]);
    expect(selectionSort([2, 1, 2])).toEqual([1, 2, 2]);
    expect(selectionSort([1, 1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
    const sorted = selectionSort([7, 2, 4, 3, 1, 2]);
    expect(selectionSort([7, 2, 4, 3, 1, 2])).toEqual([1, 2, 2, 3, 4, 7]);
  });
});
