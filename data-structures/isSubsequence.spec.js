function isSubsequence(str1, str2) {
  const arr1 = str1.split("");

  const arr2 = str2.split("");

  let j = 0;

  for (let i = 0; i < arr2.length; i++) {
    if (arr1[j] === arr2[i]) {
      j++;
    }

    if (j >= arr1.length) {
      return true;
    }
  }

  return false;
}

describe("isSubsequence", () => {
  it('should return true for "hello" and "hello world"', () => {
    expect(isSubsequence("hello", "hello world")).toBe(true);
  });

  it('should return true for "sing" and "sting"', () => {
    expect(isSubsequence("sing", "sting")).toBe(true);
  });

  it('should return true for "abc" and "abracadabra"', () => {
    expect(isSubsequence("abc", "abracadabra")).toBe(true);
  });

  it('should return false for "abc" and "acb"', () => {
    expect(isSubsequence("abc", "acb")).toBe(false);
  });
});
