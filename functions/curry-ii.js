function curry(func) {
  if(typeof func !== 'function') {
    throw new Error('A function must be provided to curry.');
  }
  return function curried(...args) {
    if(args.length === func.length) {
      return func.apply(this, args);
    } else {
      return curried.bind(this, ...args);
    };
  };
};

module.exports = curry;