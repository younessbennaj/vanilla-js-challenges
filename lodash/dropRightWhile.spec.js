function dropRightWhile(array, predicate) {
  const copy = [...array];
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      copy.pop();
    } else {
      break;
    }
  }

  return copy;
}

/*/
Start by the end of array
Remove each item until condition contained in predicate function is false
Return a new array
/*/

describe("Drop Right While", () => {
  it("should return a different instance of array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = dropRightWhile(arr, (val) => val > 2);
    expect(arr).not.toBe(result);
  });

  test("array of primitives", () => {
    expect(
      dropRightWhile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value > 3)
    ).toStrictEqual([1, 2, 3]);
    expect(dropRightWhile([1, 2, 3], (value) => value < 6)).toStrictEqual([]);
    expect(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 6)).toStrictEqual(
      [1, 2, 3, 4, 5]
    );
  });

  test("array of object", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
      { user: "pebbles", active: false },
    ];
    const expectedResult = [{ user: "barney", active: true }];
    expect(
      dropRightWhile(users, function (o) {
        return !o.active;
      })
    ).toStrictEqual(expectedResult);
  });
});
