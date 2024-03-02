function functionLength(fn) {
  return fn.length;
}

/*/
  function foo() {}
  function bar(a) {}
  function baz(a, b) {}

  functionLength(foo); // 0
  functionLength(bar); // 1
  functionLength(baz); // 2
/*/

describe("Function length", () => {
  it("should return number of arguments the function accepts", () => {
    function foo() {}
    function bar(a) {}
    expect(functionLength(foo)).toBe(0);
    expect(functionLength(bar)).toBe(1);
  });
});
