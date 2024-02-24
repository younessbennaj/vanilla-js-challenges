function isBoolean(value) {
  return typeof value === "boolean";
}

function isNumber(value) {
  return typeof value === "number";
}

function isNull(value) {
  return typeof value === "object" && !Boolean(value) && value !== undefined;
}

function isString(value) {
  return typeof value === "string";
}

function isSymbol(value) {
  return typeof value === "symbol";
}

function isUndefined(value) {
  return typeof value === "undefined";
}

describe("Type utilities", () => {
  test("boolean", () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean("hello")).toBe(false);
    expect(isBoolean(null)).toBe(false);
  });

  test("number", () => {
    expect(isNumber(10)).toBe(true);
    expect(isNumber(1.98)).toBe(true);
    expect(isNumber("hello")).toBe(false);
    expect(isNumber(null)).toBe(false);
  });

  test("null", () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(false)).toBe(false);
    expect(isNull(10)).toBe(false);
    expect(isNull(undefined)).toBe(false);
  });

  test("string", () => {
    expect(isString("hello")).toBe(true);
    expect(isString(null)).toBe(false);
    expect(isString(10)).toBe(false);
    expect(isString(undefined)).toBe(false);
  });

  test("symbol", () => {
    expect(isSymbol(Symbol("foo"))).toBe(true);
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol("string")).toBe(false);
  });

  test("undefined", () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined("string")).toBe(false);
  });
});
