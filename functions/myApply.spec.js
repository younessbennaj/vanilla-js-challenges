Function.prototype.myApply = function (ctx, args) {
  const copyObj = { ...ctx };
  copyObj.func = this;
  return copyObj.func(...args);
};

describe("My Apply Function", () => {
  test("simple case", () => {
    function addToValue(n) {
      console.log(n);
      console.log(this);
      return this.value + n;
    }

    const obj = {
      value: 10,
    };

    expect(addToValue.myApply(obj, [10])).toBe(20);
  });
});
