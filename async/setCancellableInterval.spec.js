function setCancellableInterval(func, delay, ...args) {
  const id = setInterval(() => func(...args), delay);

  return function() {
    clearInterval(id)
  };
}

describe('setCancellableInterval', () => {
  jest.useFakeTimers();

  it('should return a function', () => {
    let counter = 0;

    function increase() {
      counter++;
    }

    expect(setCancellableInterval(increase, 100)).toBeInstanceOf(Function)
  })

  it('should call func argument in interval depending on a given delay', () => {
    let counter = 0;

    function increase() {
      counter++;
    }

    setCancellableInterval(increase, 100);

    jest.advanceTimersByTime(300);

    expect(counter).toBe(3);

    jest.advanceTimersByTime(300);

    expect(counter).not.toBe(3);
  })

  it('should return a function that cancel the interval', () => {
    let counter = 0;

    function increase() {
      counter++;
    };

    const cancelInterval = setCancellableInterval(increase, 100);

    jest.advanceTimersByTime(300);

    expect(counter).toBe(3);

    jest.advanceTimersByTime(1000);

    expect(counter).toBe(13);

    cancelInterval();

    jest.advanceTimersByTime(1000);

    expect(counter).toBe(13);
  })

  it('should be able to pass arguments to callback function', () => {
    let counter = 0;
    function increaseWith(step) {
      counter = counter + step
    }

    const cancelInterval = setCancellableInterval(increaseWith, 100, 10);

    jest.advanceTimersByTime(300);

    expect(counter).toBe(30);
  })
})