Function.prototype.myCall = function (ctx, ...args) {
  const copyObj = { ...ctx };
  copyObj.func = this;
  return copyObj.func(...args);
};

describe("myCall Function instance method", () => {
  it("should set new context inside called function", () => {
    const obj = {
      value: 21,
    };

    function multiply(n) {
      return this.value * n;
    }

    expect(multiply.myCall(obj, 2)).toBe(42);
  });

  test("multiple arguments", () => {
    const obj = {
      value: "a",
    };

    function concatStrings(char1, char2) {
      return this.value + char1 + char2;
    }

    expect(concatStrings.myCall(obj, "b", "c")).toBe("abc");
  });
});
