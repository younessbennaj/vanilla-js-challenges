function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}
describe('Sleep function', () => {
  test('should return a promise instance', () => {
    expect(sleep(500)).toBeInstanceOf(Promise);
  })

  test('should bloack and wait for 3 seconds', async () => {
    const delay = 3000
    const now = new Date().getTime();
    await sleep(delay);
    const diff = new Date().getTime() - now;
    expect(diff).toBeGreaterThanOrEqual(delay);
  })
})