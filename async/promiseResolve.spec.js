/**
  The Promise.resolve() static method "resolves" a given value to a Promise. If the value is:

  - A native promise, return that promise.
  - A non-thenable, return a promise that is already fulfilled with that value.
  - A thenable, Promise.resolve() will call the then() method and pass a pair of resolving
    functions as arguments. A promise that has the same state as the thenable is returned.

  
 */
function promiseResolve(value) {
  if (value instanceof Promise) {
    return value;
  }
  return new Promise(function (resolve) {
    resolve(value);
  });
}

describe("Promise resolve", () => {
  it("should return a promise instance", () => {
    expect(promiseResolve()).toBeInstanceOf(Promise);
  });

  test("Resolving a non-promise.", () => {
    expect.assertions(1);
    return promiseResolve(42).then((res) => {
      expect(res).toEqual(42);
    });
  });

  test("Resolving a Promise.", () => {
    expect.assertions(1);
    const p0 = new Promise((resolve) => setTimeout(() => resolve(42), 100));
    return promiseResolve(p0).then((res) => {
      expect(res).toEqual(42);
    });
  });

  test("returns the same promise instance", () => {
    const p = new Promise((resolve) => resolve(42));
    expect(promiseResolve(p)).toBe(p);
  });

  test("await syntax", async () => {
    expect.assertions(1);
    const original = new Promise((resolve) => resolve(42));
    const cast = promiseResolve(original);
    const res = await cast;
    expect(res).toBe(42);
  });

  test("Resolving a thenable.", async () => {
    expect.assertions(1);
    const resolvedThenable = promiseResolve({
      then(resolve, reject) {
        resolve(42);
      },
    });

    return promiseResolve(resolvedThenable).then((res) => {
      expect(res).toEqual(42);
    });
  });
});
