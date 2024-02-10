/**
  Implement a stack data structure in JavaScript that contains the following operations:

  new Stack(): Creates an instance of a Stack class that doesn't contain any items. The constructor does not accept any arguments.
  push(): Pushes an item onto the top of the stack. Required time complexity: O(1).
  pop(): Removes an item at the top of the stack and returns that item. Required time complexity: O(1).
  isEmpty(): Determines if the stack is empty. Required time complexity: O(1).
  peek(): Returns the item at the top of the stack without removing it from the stack. Required time complexity: O(1).
  length(): Returns the number of items in the stack. Required time complexity: O(1).

 */

class Stack {
  // ex: { 0: 'a', 1: 'b', 2: 'c' }
  constructor() {
    return this;
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    this[this.length()] = item;
    return this.length();
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    const el = Object.values(this)[this.length() - 1];
    delete this[this.length() - 1];
    return el;
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    // has no values
    return !Boolean(this.length());
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    return Object.values(this)[this.length() - 1];
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return Object.keys(this).length;
  }
}

describe("Stack", () => {
  test("create new instance of Stack", () => {
    const stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
  });

  it("should verify if stack is empty", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it("should add new element in stack instance", () => {
    const stack = new Stack();
    expect(stack.push("a")).toBe(1);
    expect(stack.push("b")).toBe(2);
    expect(stack.isEmpty()).toBe(false);
  });

  it("should check stack length", () => {
    const stack = new Stack();
    stack.push("a");
    stack.push("b");
    expect(stack.length()).toBe(2);
  });

  it("should return value at top of the stack", () => {
    const stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");
    expect(stack.peek()).toBe("c");
    expect(stack.length()).toBe(3);
  });

  it("should return value at top of the stack", () => {
    const stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");
    expect(stack.pop()).toBe("c");
    expect(stack.length()).toBe(2);
  });

  it("should return undefined", () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(undefined);
    expect(stack.peek()).toBe(undefined);
    expect(stack.length()).toBe(0);
  });
});
