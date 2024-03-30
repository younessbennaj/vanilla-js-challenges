function deepEqual(valueA, valueB) {
  return JSON.stringify(valueA) === JSON.stringify(valueB);
}

describe("Deep equality", () => {
  test("strings", () => {
    expect(deepEqual("foo", "foo")).toBe(true);
    expect(deepEqual("foo", "bar")).toBe(false);
  });

  test("numbers", () => {
    expect(deepEqual(21, 21)).toBe(true);
    expect(deepEqual(21, 42)).toBe(false);
    expect(deepEqual(21.5, 21)).toBe(false);
    expect(deepEqual(42.42, 42.42)).toBe(true);
  });

  test("booleans", () => {
    expect(deepEqual(true, true)).toBe(true);
    expect(deepEqual(true, false)).toBe(false);
  });

  test("null", () => {
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(null, false)).toBe(false);
  });

  test("objects", () => {
    expect(deepEqual({ id: 1 }, { id: 1 })).toBe(true);
    expect(deepEqual({ id: 4 }, { id: 1 })).toBe(false);
  });

  test("arrays", () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(deepEqual([{ id: "1" }], [{ id: "2" }])).toBe(false);
  });
});
