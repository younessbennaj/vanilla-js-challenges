function listFormat(usernameList, options) {
  if (!usernameList || !(usernameList instanceof Array)) {
    throw new Error("You must provide an array of username");
  }

  let copy = [...usernameList];

  copy = copy.filter((username) => Boolean(username));

  if (options && options.sorted) {
    copy = copy.sort();
  }

  if (options && options.unique) {
    copy = Array.from(new Set(copy));
  }

  const str = copy.reduce((acc, cur, index, array) => {
    if (
      options &&
      options.length &&
      options.length > 0 &&
      index === options.length
    ) {
      const remainingItems = array.length - options.length;
      return (
        acc +
        ` and ${remainingItems} ${remainingItems > 1 ? "others" : "other"}`
      );
    } else if (
      options &&
      options.length &&
      options.length > 0 &&
      index > options.length
    ) {
      return acc;
    } else if (index === array.length - 1 && index !== 0) {
      return acc + " and " + cur;
    } else if (index !== 0) {
      return acc + ", " + cur;
    } else {
      return acc + cur;
    }
  }, "");
  return str;
}

describe("List Format", () => {
  it("should return a string", () => {
    expect(typeof listFormat(["Bob", "Alice"])).toBe("string");
  });

  it("should throw an error if list is not provided", () => {
    expect(() => listFormat()).toThrow(
      new Error("You must provide an array of username")
    );
    expect(() => listFormat("hello")).toThrow(
      new Error("You must provide an array of username")
    );
  });

  describe("without options", () => {
    test("empty list", () => {
      expect(listFormat([])).toBe("");
    });

    test("1 username", () => {
      expect(listFormat(["Bob"])).toBe("Bob");
    });

    test("2 usernames", () => {
      expect(listFormat(["Bob", "Alice"])).toBe("Bob and Alice");
    });

    test("3 usernames", () => {
      expect(listFormat(["Bob", "Alice", "John"])).toBe("Bob, Alice and John");
    });

    test("many", () => {
      expect(listFormat(["Bob", "Ben", "Tim", "Jane", "John"])).toBe(
        "Bob, Ben, Tim, Jane and John"
      );
    });
  });

  describe("with options", () => {
    test("length", () => {
      const result1 = listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
        length: 3,
      });

      const result2 = listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
        length: 4,
      });

      expect(result1).toBe("Bob, Ben, Tim and 2 others");
      expect(result2).toBe("Bob, Ben, Tim, Jane and 1 other");
    });

    test("sort", () => {
      const originalList = ["Bob", "Ben", "Tim", "Jane", "John"];
      const result = listFormat(originalList, {
        length: 3,
        sorted: true,
      });

      expect(originalList).toStrictEqual(["Bob", "Ben", "Tim", "Jane", "John"]);
      expect(result).toBe("Ben, Bob, Jane and 2 others");
    });

    test("unique", () => {
      const result = listFormat(["Bob", "Ben", "Tim", "Jane", "John", "Bob"], {
        length: 3,
        unique: true,
      });

      const result2 = listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
        length: 3,
        unique: true,
      });

      expect(result).toBe("Bob, Ben, Tim and 2 others");
      expect(result2).toBe("Bob, Ben, Tim and 2 others");
    });

    it("should ignore empty string", () => {
      const result = listFormat(["Bob", "Ben", "", "", "John"]);

      expect(result).toBe("Bob, Ben and John");
    });
  });
});
