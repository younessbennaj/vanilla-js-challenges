function curry(func) {
  let count = func.length;
  let args = [];

  return function myFunction(arg) {
    console.log(func.length === 0)
    if(func.length === 0) {
      return func.apply(this, args);
    }
    if(arg) {
      count--;
      args.push(arg);
      if (count === 0) {
        count = func.length;
        let final = [...args]
        args = [];
        return func.apply(this, final);
      } else {
        return myFunction.bind(this);
      }
    } else {
      return myFunction.bind(this);
    }
  }
}

module.exports = curry;