function swapKeyValue(obj) {
  return Object.fromEntries(Object.entries(obj).map((pair) => pair.reverse()));
}

describe("Swap object keys and values", () => {
  it("shoudl swipe key/value of obect", () => {
    expect(swapKeyValue({ z: "a", y: "b", x: "c", w: "d" })).toStrictEqual({
      a: "z",
      b: "y",
      c: "x",
      d: "w",
    });

    expect(swapKeyValue({ 2: "a", 4: "b", 6: "c", 8: "d" })).toStrictEqual({
      a: "2",
      b: "4",
      c: "6",
      d: "8",
    });

    expect(swapKeyValue({ a: 1, z: 24 })).toStrictEqual({ 1: "a", 24: "z" });
  });
});
