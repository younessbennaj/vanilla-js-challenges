const pause = require('./pause');

describe('Pause function that simply does nothing for 3 seconds', () => {
  it('should wait 3 seconds', () => {
    expect.assertions(4);
    let i = 0;
    expect(i).toBe(0);
    let now = Date.now();
    pause();
    expect(i).toBe(0);
    i++;
    expect(i).toBe(1);
    expect(Date.now() - now).toBeGreaterThan(2500);
  })
})