function promiseAll(promises) {
  return new Promise(async (resolve, reject) => {
    const result = [];

    let count = 0;

    if (promises.length === 0) {
      resolve([]);
    }

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((res) => {
          result[i] = res;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
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

    test("empty input array", async () => {
      expect.assertions(1);
      const res = await promiseAll([]);
      expect(res).toEqual([]);
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

      return promiseAll([p0, p1, p2]).catch((err) => {
        expect(err).toEqual(4);
      });
    });
  });

  describe("Name of the group", () => {
    test("many promises", async () => {
      expect.assertions(1);
      const p0 = new Promise((_, reject) => {
        setTimeout(() => {
          reject(1);
        }, 200);
      });
      const p1 = new Promise((_, reject) => {
        setTimeout(() => {
          reject(2);
        }, 300);
      });
      const p2 = new Promise((_, reject) => {
        setTimeout(() => {
          reject(3);
        }, 100);
      });

      await expect(promiseAll([p0, p1, p2])).rejects.toBe(3);
    });
  });
});
