function convertArrayToCounterObject(a) {
  return a.reduce(
    (obj, el) => ({ ...obj, [el]: obj[el] ? obj[el] + 1 : 1 }),
    {}
  );
}

describe("Convert array to object with counter", () => {
  it("test", () => {
    expect(convertArrayToCounterObject([1, 2, 2, 3])).toStrictEqual({
      1: 1,
      2: 2,
      3: 1,
    });
  });
});
