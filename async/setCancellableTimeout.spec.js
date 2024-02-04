function setCancellableTimeout(callback, delay, ...args) {
  if(!callback || !delay) {
    throw new Error('callback or delay are missing')
  }
  const id = setTimeout(() => callback(...args), delay);
  return function() {
    clearTimeout(id)
  };
}

describe('setCancellableTimeout function', () => {
  jest.useFakeTimers();

  it('shoud throw error if callback and delay are missing', () => {
    expect(() => setCancellableTimeout()).toThrow(Error);
  })

  it('should return a function', () => {
    expect(setCancellableTimeout(function() {}, 300)).toBeInstanceOf(Function);
  })

  it('should increase counter with delay', () => {
    let counter = 0;
    expect(counter).toBe(0);
    
    function increase() {
      counter++;
    }

    setCancellableTimeout(increase, 300);

    expect(counter).toBe(0); // t = 0

    jest.advanceTimersByTime(200);

    expect(counter).toBe(0); // t = 200

    jest.advanceTimersByTime(200);

    expect(counter).toBe(1); // t = 400

    jest.advanceTimersByTime(200);

    expect(counter).toBe(1); // t = 600
  })

  it('should return a function to cancel timeout', () => {
    let counter = 0;
    expect(counter).toBe(0);
    
    function increase() {
      counter++;
    }

    const cancelTimeout = setCancellableTimeout(increase, 1000);

    expect(counter).toBe(0); // t = 0

    jest.advanceTimersByTime(500);

    expect(counter).toBe(0); // t = 0

    cancelTimeout()

    jest.advanceTimersByTime(1200);

    expect(counter).toBe(0); // t = 400
  })
});