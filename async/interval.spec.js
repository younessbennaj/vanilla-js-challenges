describe('Set Interval Function', () => {
  jest.useFakeTimers();

  test('should call function multiple time during interval depending on delay', () => {
    const funcMock = jest.fn();

    setInterval(funcMock, 100);

    jest.advanceTimersByTime(300);

    expect(funcMock).toHaveBeenCalledTimes(3);
  });

  test('should increase counter', () => {
    let counter = 0;

    const increase = () => {
      counter++;
    };

    setInterval(increase, 100)

    jest.advanceTimersByTime(500);

    expect(counter).toBe(5)
  })

  test('should clear interval', () => {
    let counter = 0;

    const increase = () => {
      counter++;
    };

    const intervalId = setInterval(increase, 100)

    jest.advanceTimersByTime(500);

    expect(counter).toBe(5)

    jest.advanceTimersByTime(500);

    expect(counter).toBe(10)

    clearInterval(intervalId) // Stop interval here

    jest.advanceTimersByTime(500);

    expect(counter).toBe(10)
  })

  afterEach(() => {
    jest.clearAllTimers();
  });
});