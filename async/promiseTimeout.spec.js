// When fetching data or performing other async operations, it is sometimes useful
// to set a timeout duration, i.e. enforce that a response is received before the timeout,
// otherwise deem the request a failed one.

// Implement a promiseTimeout function that accepts a promise and a timeout
// duration (in milliseconds) and returns a Promise. If the promise argument
// is settled within the timeout period, the returned promise is settled with
// the promise argument's settled value, which can be both resolved/rejected values.
// Otherwise, the returned promise will reject with the string "Promise timeout".

function promiseTimeout(p, timeout) {
  return new Promise(function (resolve, reject) {
    p.then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });

    setTimeout(() => {
      reject("Promise timeout");
    }, timeout);
  });
}

describe("Promise Timeout", () => {
  it("should return a Promise instance", () => {
    const p0 = Promise.resolve(42);
    expect(promiseTimeout(p0, 200)).toBeInstanceOf(Promise);
  });

  describe("Resolve", () => {
    test("Instant", async () => {
      expect.assertions(1);
      const p0 = Promise.resolve(42);
      const res = await promiseTimeout(p0, 200);
      expect(res).toEqual(42);
    });

    test("Delayed shorter than timeout", async () => {
      expect.assertions(1);
      const p0 = new Promise((resolve) => setTimeout(() => resolve(42), 100));
      const res = await promiseTimeout(p0, 200);
      expect(res).toEqual(42);
    });

    test("Delayed longer than timeout", async () => {
      expect.assertions(1);
      const p0 = new Promise((resolve) => setTimeout(() => resolve(42), 500));
      try {
        const res = await promiseTimeout(p0, 200);
      } catch (err) {
        expect(err).toBe("Promise timeout");
      }
    });
  });

  describe("Reject", () => {
    test("instant", async () => {
      expect.assertions(1);
      const p0 = Promise.reject(42);
      try {
        await promiseTimeout(p0, 200);
      } catch (err) {
        expect(err).toEqual(42);
      }
    });

    test("delayed shorter than timeout", async () => {
      expect.assertions(1);
      const p0 = new Promise((_, reject) => setTimeout(() => reject(42), 100));
      try {
        await promiseTimeout(p0, 200);
      } catch (err) {
        expect(err).toEqual(42);
      }
    });

    test("delayed longer than timeout", async () => {
      expect.assertions(1);
      const p0 = new Promise((_, reject) => setTimeout(() => reject(42), 500));
      try {
        await promiseTimeout(p0, 200);
      } catch (err) {
        expect(err).toBe("Promise timeout");
      }
    });
  });
});
