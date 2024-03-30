Array.prototype.myMap = function (callbackFn, thisArg) {
  const newArr = [];
  const that = thisArg ? thisArg : this;

  for (let i = 0; i < this.length; i++) {
    if (this[i]) {
      newArr.push(callbackFn.call(that, this[i], i, this));
    } else {
      newArr.length++;
    }
  }

  return newArr;
};

describe("Map array", () => {
  it("should return an array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myMap((el) => {
      return el * 2;
    });
    expect(result).toBeInstanceOf(Array);
  });

  test("simple", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myMap((el) => {
      return el * 2;
    });
    expect(result).toStrictEqual([2, 4, 6, 8, 10]);
  });

  test("bind this", () => {
    const obj = {
      value: 10,
    };
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myMap(function (el) {
      return el * this.value;
    }, obj);
    expect(result).toStrictEqual([10, 20, 30, 40, 50]);
  });

  test("sparse array", () => {
    const arr = [1, 2, , 4, 5];
    const result = arr.myMap((el) => {
      return el * 2;
    });
    expect(result).toStrictEqual([2, 4, , 8, 10]);
  });
});
