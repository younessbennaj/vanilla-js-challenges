function compact(array) {
  return array.filter((el) => Boolean(el));
}

describe("Compact", () => {
  it("should remove all falsy value in array", () => {
    expect(
      compact([0, 1, 2, 3, "", 5, null, 7, 8, false, 10, undefined])
    ).toStrictEqual([1, 2, 3, 5, 7, 8, 10]);
  });
});
