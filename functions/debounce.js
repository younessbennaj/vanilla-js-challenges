function debounce(func, delay) {
  let timeoutId
  return function(...args) {
    const that = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
      func.apply(that, args);
    }, delay)
  };
}

module.exports = debounce;