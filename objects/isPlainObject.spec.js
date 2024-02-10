function isPlainObject(value) {
  return Object.prototype === Object.getPrototypeOf(value);
}

describe("Is plain object ?", () => {
  test("Basic JS object should be consider as plain object", () => {
    expect(isPlainObject({ foo: "bar" })).toBe(true);
  });

  test("Array should not be consider as plain object", () => {
    expect(isPlainObject([1, 2, 3, 3])).toBe(false);
  });

  test("Set should not be consider as plain object", () => {
    expect(isPlainObject(new Set([1, 2, 3, 3]))).toBe(false);
  });
});
