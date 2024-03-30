/*
Implement a function inRange(value, [start=0], end) to check if
a number value is between start and up to, but not including, end.
If only 2 arguments are specified, the second argument becomes end
and start is set to 0. If start is greater than end, the 
parameters are swapped to support negative ranges.

*** start < value < end ? true : false ***

if value === start => included 
if value === end => excluded

at least 2 arguments => value and stop

by default: start = 0

only 2 argument => value and end (start will = 0)

3 arguments => value, start, and end

start > end => start = end and end = start

*/

function inRange(value, start, end) {
  let s = 0;
  let e;

  if (arguments.length < 2) {
    throw new Error("at least value and end options");
  }

  if (arguments.length === 2) {
    e = start;
  }

  if (arguments.length === 3) {
    e = start > end ? start : end;
    s = start > end ? end : start;
  }

  return value >= s && value < e;
}

describe("inRange: is value between range ?", () => {
  test("less than 2 arguments should throw", () => {
    expect(() => inRange(10)).toThrow();
  });

  test("value and end options only", () => {
    expect(inRange(10, 20)).toBe(true);
    expect(inRange(10, 5)).toBe(false);
    expect(inRange(-10, 5)).toBe(false);
  });

  test("value, start and end options", () => {
    expect(inRange(10, 10, 20)).toBe(true);
    expect(inRange(10, 15, 20)).toBe(false);
    expect(inRange(-10, -20, 5)).toBe(true);
  });

  test("start greater than end", () => {
    expect(inRange(30, 50, 20)).toBe(true);
    expect(inRange(10, 15, 20)).toBe(false);
    expect(inRange(-10, -20, 5)).toBe(true);
  });
});
