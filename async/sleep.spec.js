const sleep = require('./sleep');

describe('Sleep function', () => {
  test('should return a promise', () => {
    expect(sleep(2000) instanceof Promise).toBe(true);
  })

  test('executes after delay', async () => {
    expect.assertions(4);
    let i = 0;
    expect(i).toBe(0);
    let now = Date.now();
    await sleep(50);
    expect(i).toBe(0);
    i++;
    expect(i).toBe(1);
    expect(Date.now() - now).toBeGreaterThan(25);
  });
})