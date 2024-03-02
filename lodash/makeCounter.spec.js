function makeCounter(initialValue = 0) {
  let i = initialValue - 1;
  return function () {
    i++;
    return i;
  };
}

describe("Make counter", () => {
  it("should return a counter", () => {
    expect(makeCounter()).toBeInstanceOf(Function);
  });

  test("increment from 0", () => {
    const counter = makeCounter();
    expect(counter()).toBe(0);
  });

  test("increment from intial value if provided", () => {
    const counter = makeCounter(10);
    expect(counter()).toBe(10);
  });

  test("increment multiple times", () => {
    const counter = makeCounter();
    counter();
    counter();
    counter();
    expect(counter()).toBe(3);
  });

  test("increment multiple times from 10", () => {
    const counter = makeCounter(10);
    counter();
    counter();
    counter();
    expect(counter()).toBe(13);
  });
});
