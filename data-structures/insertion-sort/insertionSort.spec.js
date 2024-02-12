function insertionSort(arr) {
  const copy = arr.slice();
  for (let i = 1; i < copy.length; i++) {
    for (let j = i; j >= 1; j--) {
      if (copy[j] < copy[j - 1]) {
        const temp = copy[j];
        copy[j] = copy[j - 1];
        copy[j - 1] = temp;
      } else {
        break;
      }
    }
  }

  return copy;
}

describe("Insertion sort", () => {
  it("should sort array in ascending order", () => {
    expect(insertionSort([9, 3, 6, 2, 1, 11])).toStrictEqual([
      1, 2, 3, 6, 9, 11,
    ]);
  });
});
