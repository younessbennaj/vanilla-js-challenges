function get(objectParam, pathParam, defaultValue) {
  const pathList =
    pathParam instanceof Array ? pathParam : pathParam.split(".");
  let value = objectParam;

  for (let index = 0; index < pathList.length; index++) {
    const path = pathList[index];
    if (value[path] === null && index === pathList.length - 1) {
      return null;
    }
    if (typeof value[path] !== "undefined" && value[path] !== null) {
      value = value[path];
    } else {
      return defaultValue;
    }
  }
  return value;
}

describe("Get function", () => {
  const obj1 = {
    foo: {
      bar: {
        baz: 42,
      },
    },
  };

  const obj2 = {
    foo: {
      bar: {
        xyz: 21,
      },
    },
  };

  test("property exist", () => {
    const obj1 = {
      foo: {
        bar: {
          baz: 42,
        },
      },
    };

    const obj2 = {
      foo: [{ bar: { baz: 21 } }, { abc: { xyz: 21 } }],
    };

    expect(get(obj1, "foo.bar.baz")).toBe(42);
    expect(get(obj2, "foo.0.bar.baz")).toBe(21);
  });

  test("property does not exist", () => {
    const obj1 = {
      foo: {
        xyz: {
          baz: 42,
        },
      },
    };

    const obj2 = {
      abc: {
        bar: {
          baz: 42,
        },
      },
    };

    expect(get(obj1, "foo.bar.baz")).toBe(undefined);
    expect(get(obj2, "foo.bar.baz")).toBe(undefined);
  });

  test("use default if not exist", () => {
    const obj1 = {
      foo: {
        xyz: {
          baz: 42,
        },
      },
    };

    const obj2 = {
      abc: {
        bar: {
          baz: 42,
        },
      },
    };

    expect(get(obj1, "foo.bar.baz", 42)).toBe(42);
    expect(get(obj2, "foo.bar.baz", "hello")).toBe("hello");
  });

  test("path as an array", () => {
    const obj2 = {
      abc: {
        bar: {
          baz: 42,
        },
      },
    };
    expect(get(obj2, ["abc", "bar", "baz"], "hello")).toBe(42);
  });

  test("access non-primitive", () => {
    expect(get({ a: { b: null } }, "a.b.c")).toEqual(undefined);
  });

  test("correctly returns null values", () => {
    expect(get({ b: null }, "b")).toEqual(null);
    expect(get({ a: { b: 2, c: null }, c: 1 }, "a.c")).toEqual(null);
    expect(
      get({ a: { b: 2, c: { d: { e: null } } }, c: 1 }, "a.c.d.e")
    ).toEqual(null);
  });
});
