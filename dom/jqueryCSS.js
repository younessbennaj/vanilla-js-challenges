function $(selector) {
  const element = document.querySelector(selector);
  return {
    css: function(prop, value) {
        if (value && element) {
          element.style[prop] = value;
        }
        
        if (element && element.style[prop] && !value) {
          return element.style[prop];
        }

        if ((element && !element.style[prop]) || (!element && !value)) {
          return undefined;
        }

        return this;
    },
  };
}

module.exports = $