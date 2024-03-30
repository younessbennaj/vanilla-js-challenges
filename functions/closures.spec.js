function getValueFn(value) {
  return function () {
    return value;
  };
}

describe("Closures", () => {
  test("get correct value", () => {
    const getters = [];

    for (var i = 0; i <= 10; i++) {
      getters.push(getValueFn(i));
    }

    expect(getters[3]()).toBe(3);
  });

  test("es6 with let", () => {
    const arr = [];

    for (let i = 0; i < 3; i++) {
      arr.push(function () {
        return i;
      });
    }

    expect(arr[2]()).toBe(2);
  });

  test("Old JS version", () => {
    const arr = [];

    for (var i = 0; i < 3; i++) {
      arr.push(
        (function (j) {
          return function () {
            return j;
          };
        })(i)
      );
    }

    expect(arr[2]()).toBe(2);
  });
});
