function chunk(array, size = 1) {
  const newArr = [];
  for (let i = 0; i < array.length; i = i + size) {
    newArr.push(array.slice(i, i + size));
  }
  return newArr;
}

describe("chunk", () => {
  describe("can be split evenly", () => {
    test("default chunk size (size = 1)", () => {
      const arr = ["1", "2", "3", "4", "5", "6"];
      expect(chunk(arr)).toStrictEqual([
        ["1"],
        ["2"],
        ["3"],
        ["4"],
        ["5"],
        ["6"],
      ]);
    });

    test("chunk size = 2", () => {
      const arr = ["1", "2", "3", "4", "5", "6"];
      expect(chunk(arr, 2)).toStrictEqual([
        ["1", "2"],
        ["3", "4"],
        ["5", "6"],
      ]);
    });

    test("chunk size = 3", () => {
      const arr = ["1", "2", "3", "4", "5", "6"];
      expect(chunk(arr, 3)).toStrictEqual([
        ["1", "2", "3"],
        ["4", "5", "6"],
      ]);
    });
  });

  describe("cannot be split evenly", () => {
    test("default chunk size", () => {
      const arr = ["1", "2", "3", "4", "5", "6", "7"];
      expect(chunk(arr, 2)).toStrictEqual([
        ["1", "2"],
        ["3", "4"],
        ["5", "6"],
        ["7"],
      ]);
    });
  });
});
