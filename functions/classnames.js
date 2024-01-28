function classNames(...args) {
  const arr = args.filter(arg => !!arg).map(arg => {
    if(['string', 'number'].includes(typeof arg)) {
      return arg;
    }
    if(arg instanceof Array) {
      return classNames(...arg);
    }
    if(typeof arg === 'object') {
        return Object.entries(arg).filter(([classname, condition]) => {
            return condition;
        }).map(([classname, condition]) => {
            return classname;
        })
    }        
  })

  return arr.flat().join(' ');
}

module.exports = classNames;