const curry = require('./curry-ii')

const empty = () => 0;
const square = (a) => a * a;
const sum = (a, b) => a + b;
const abc = (a, b, c) => [a, b, c];
const multiply = function(x, y) {
  return this.base * x * y;
}

describe('curry II', () => {
  test('returns function', () => {
    const curried = curry(sum);
    expect(curried).toBeInstanceOf(Function);
  })

  test('if function with no argument is passed', () => {
    const curried = curry(empty);
    expect(curried()).toBe(0);
  })

  describe('single argument', () => {
    it('should ignore empty call when expecting at least one argument', () => {
      const curried = curry(square);
      expect(curried()).toBeInstanceOf(Function);
    })

    it('should call the original function and return the result when the number of arguments required is reached', () => {
      const curried = curry(square);
      expect(curried(2)).toBe(4);
    })
  })

  describe('two arguments', () => {
    it('should ignore empty call when expecting at least one argument', () => {
      const curried = curry(sum);
      expect(curried()).toBeInstanceOf(Function);
    })

    it('should not call the original function until the number of arguments required is reached', () => {
      const curried = curry(sum);
      expect(curried(2)).toBeInstanceOf(Function);
    })

    it('should call the original function when the number of arguments required is reached', () => {
      const curried = curry(sum);
      expect(curried(2)(3)).toBe(5);
    })

    test('with multiple step call', () => {
      const curried = curry(sum);
      const stepOne = curried(2);
      const result = stepOne(3)
      expect(result).toBe(5);
    })

    it('should not call', () => {
      const curried = curry(sum);
      curried(2);
      expect(curried(3)).toBeInstanceOf(Function);
    })
  })

  describe('three arguments', () => {
    it('should ignore empty call when expecting at least one argument', () => {
      const curried = curry(abc);
      expect(curried()).toBeInstanceOf(Function);
    })

    it('should not call the original function until the number of arguments required is reached', () => {
      const curried = curry(abc);
      expect(curried(1)(2)).toBeInstanceOf(Function);
    })

    it('should call the original function when the number of arguments required is reached', () => {
      const curried = curry(abc);
      expect(curried(1)(2)(3)).toStrictEqual([1,2,3]);
    })

    test('with multiple step call', () => {
      const curried = curry(abc);
      const stepOne = curried(1);
      const stepTwo = stepOne(2);
      const result = stepTwo(3);
      expect(result).toStrictEqual([1,2,3]);
    })

    it('should not call', () => {
      const curried = curry(abc);
      curried(1);
      curried(2);
      expect(curried(3)).toBeInstanceOf(Function);
    })
  })

  describe('step with multiple arguments', () => {
    it('curried should accept any number of arguments', () => {
      const curriedAbc = curry(abc);
      const stepOne = curriedAbc(1, 2)
      expect(stepOne(3)).toStrictEqual([1,2,3]);
      const curriedSum = curry(sum);
      expect(curriedSum(2, 2)).toBe(4);
    })
  })

  describe('bind this', () => {
    it('should allow the original function to be called as a method of an object', () => {
      const curried = curry(multiply);
      const obj = { base: 10, multiply: curried };
      expect(obj.multiply(2)(3)).toBe(60);
    })
  })

  describe('re use', () => {
    it('function should allow for the curried function to be reused after the original function has been invoked', () => {
      const curried = curry(sum);
      expect(curried(2, 3)).toBe(5);
      const stepOne = curried(2);
      expect(stepOne(3)).toBe(5);
    })
  })

  describe('errors', () => {
    it('should generate an error if no function is provided as an argument', () => {
      expect(() => curry()).toThrow();
    })

    it('should generate an error if an invalid input (not a function) is provided as an argument.', () => {
      expect(() => curry('hello')).toThrow();
    })
  }) 
})