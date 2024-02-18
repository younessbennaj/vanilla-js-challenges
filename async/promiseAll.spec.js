function promiseAll(promises) {
  const bool = promises.some((p) => p instanceof Promise);

  return new Promise(async (resolve, reject) => {
    const result = [];

    for (let p of promises) {
      try {
        const res = await p;
        result.push(res);
      } catch (err) {
        reject(err);
      }
    }

    resolve(result);
  });
}

describe("Promise all", () => {
  // value
  // instant
  // delayed

  // all resolved
  // all rejected
  // mixins

  describe("all resolved", () => {
    it("should return a Promise instance", async () => {
      expect.assertions(1);
      const p0 = Promise.resolve(2);
      const p1 = Promise.resolve(4);
      const p2 = Promise.resolve(6);

      expect(promiseAll([p0, p1, p2])).toBeInstanceOf(Promise);
    });

    it("should be resolved with an Array", async () => {
      expect.assertions(1);
      const p0 = Promise.resolve(2);
      const p1 = Promise.resolve(4);
      const p2 = Promise.resolve(6);

      const res = await promiseAll([p0, p1, p2]);

      expect(res).toBeInstanceOf(Array);
    });

    test("value", async () => {
      expect.assertions(1);
      const p0 = 2;
      const p1 = 4;
      const p2 = 6;
      const res = await promiseAll([p0, p1, p2]);
      expect(res).toStrictEqual([2, 4, 6]);
    });

    test("instant", async () => {
      expect.assertions(1);
      const p0 = Promise.resolve(2);
      const p1 = Promise.resolve(4);
      const p2 = Promise.resolve(6);

      const res = await promiseAll([p0, p1, p2]);
      expect(res).toStrictEqual([2, 4, 6]);
    });

    test("delayed", async () => {
      expect.assertions(1);
      const p0 = new Promise((resolve) => setTimeout(() => resolve(2), 500));
      const p1 = new Promise((resolve) => setTimeout(() => resolve(4), 100));
      const p2 = new Promise((resolve) => setTimeout(() => resolve(6), 200));

      const res = await promiseAll([p0, p1, p2]);
      expect(res).toStrictEqual([2, 4, 6]);
    });

    test("mixins", async () => {
      expect.assertions(1);
      const p0 = Promise.resolve(2);
      const p1 = new Promise((resolve) => setTimeout(() => resolve(4), 100));
      const p2 = 6;

      const res = await promiseAll([p0, p1, p2]);
      expect(res).toStrictEqual([2, 4, 6]);
    });
  });

  describe("All rejected", () => {
    test("instant", async () => {
      expect.assertions(1);
      const p0 = Promise.reject(2);
      const p1 = Promise.resolve(3);
      const p2 = Promise.resolve(4);

      try {
        await promiseAll([p0, p1, p2]);
      } catch (err) {
        expect(err).toEqual(2);
      }
    });

    test("delayed", async () => {
      expect.assertions(1);
      const p0 = new Promise((_, reject) => setTimeout(() => reject(2), 500));
      const p1 = new Promise((_, reject) => setTimeout(() => reject(4), 100));
      const p2 = new Promise((_, reject) => setTimeout(() => reject(6), 200));

      promiseAll([p0, p1, p2]).catch((err) => {
        expect(err).toEqual(2);
      });
    });
  });
});
