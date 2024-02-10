/**
 Implement a function that accepts two promises and returns a single 
 Promise. This returned promise fulfills when both input promises 
 fulfill, with a single value according to the order and types of 
 the fulfillment values:

 - Numbers should be added together.
 - Strings should be concatenated.
 - Arrays should be combined into a single array.
 - Plain objects should be merged into a single object.
 - Other types aren't supported.

The return promise can also be rejected if one of the following happens:

- The types of the fulfilled results do not match, reject with the string 'Unsupported data types'.
- One of the promises fail, reject with the rejected promise's reason.
 */

function promiseMerge(p1, p2) {
  if (!Array.from(arguments).every((arg) => arg instanceof Promise)) {
    throw new Error("You should only provide promise object.");
  }

  if (arguments.length !== 2) {
    throw new Error("You should provide 2 promises.");
  }

  return new Promise(async function (resolve, reject) {
    let result1;
    let result2;
    try {
      result1 = await p1;
      result2 = await p2;
    } catch (err) {
      reject(err);
    }

    if (result1 instanceof Array && result2 instanceof Array) {
      resolve([...result1, ...result2]);
    }
    if (result1 instanceof Object && result2 instanceof Object) {
      resolve({ ...result1, ...result2 });
    }

    if (typeof result1 === "string" && typeof result2 === "string") {
      resolve(result1 + result2);
    }

    if (typeof result1 === "number" && typeof result2 === "number") {
      resolve(result1 + result2);
    }

    reject("Unsupported data types");
  });
}

describe("Promise Merge", () => {
  it("should accept two promise as argument", () => {
    const p0 = Promise.resolve(1);
    const p1 = Promise.resolve(2);
    expect(() => promiseMerge(p1)).toThrow(
      new Error("You should provide 2 promises.")
    );

    expect(() => promiseMerge(p0, "hello")).toThrow(
      new Error("You should only provide promise object.")
    );
  });

  it("should return a promise", () => {
    const p0 = Promise.resolve(1);
    const p1 = Promise.resolve(2);
    expect(promiseMerge(p0, p1)).toBeInstanceOf(Promise);
  });

  test("Numbers should be added together", async () => {
    const p0 = Promise.resolve(1);
    const p1 = Promise.resolve(2);
    const res = await promiseMerge(p0, p1);
    expect(res).toEqual(3);
  });

  test("Strings should be concatenated.", async () => {
    const p0 = Promise.resolve("hello ");
    const p1 = Promise.resolve("world !");
    const res = await promiseMerge(p0, p1);
    expect(res).toEqual("hello world !");
  });

  test("Arrays should be combined into a single array.", async () => {
    const p0 = Promise.resolve([1, 2, 3]);
    const p1 = Promise.resolve([4, 5, 6]);
    const res = await promiseMerge(p0, p1);
    expect(res).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test("Plain objects should be merged into a single object.", async () => {
    const p0 = Promise.resolve({ foo: "bar" });
    const p1 = Promise.resolve({ bar: "foo" });
    const res = await promiseMerge(p0, p1);
    expect(res).toStrictEqual({ foo: "bar", bar: "foo" });
  });

  test("Other types aren't supported.", async () => {
    const p0 = Promise.resolve(1);
    const p1 = Promise.resolve([]);
    try {
      const res = await promiseMerge(p0, p1);
    } catch (err) {
      expect(err).toEqual("Unsupported data types");
    }
  });

  test("One of the promises fail, reject with the rejected promise's reason.", async () => {
    const p0 = Promise.resolve(1);
    const p1 = Promise.reject(4);
    try {
      const res = await promiseMerge(p0, p1);
    } catch (err) {
      expect(err).toEqual(4);
    }
  });
});
