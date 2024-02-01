describe('Timeout', () => {
  test('synchronous', () => {
    let counter = 0;
    expect(counter).toBe(0);
    counter++;
    expect(counter).toBe(1);
    counter++;
    expect(counter).toBe(2);
  })

  test('asynchronous', () => {
    let counter = 0;
    expect(counter).toBe(0);
    counter++;
    expect(counter).toBe(1);
    setTimeout(() => counter++, 0)
    expect(counter).not.toBe(2);
  })

  test('delay in synchronous should be 0', () => {
    const now = new Date().getTime(); // get time is ms
    const diff = new Date().getTime() - now;
    expect(diff).toBe(0);
  })

  test('asynchronous code should respect a given delay', (done) => {
    const delay = 200;
    const now = new Date().getTime();
    setTimeout(() => {
      const diff = new Date().getTime() - now;
      expect(diff).not.toBe(0);
      expect(diff).toBeGreaterThanOrEqual(delay);
      done()
    }, delay)
  })

  test('async test value', (done) => {
    let counter = 0;
    counter++;
    setTimeout(() => {
      counter++;
      expect(counter).toBe(2)
      done()// Calling done() to indicate end of asynchronous test
    }, 200);
  });
});