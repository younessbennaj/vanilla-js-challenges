// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise
function checkPropertyTruthy(a, b) {
  return Boolean(a[b]);
}

describe('Check if property exists in object and is truthy', () => {
  it('should return a boolean', () => {
    expect(typeof checkPropertyTruthy({a:1,b:2,c:3},'b')).toBe('boolean');    
  });

  it('should return true if property is truthy', () => {
    expect(checkPropertyTruthy({a:1,b:2,c:3},'b')).toBe(true); 
    expect(checkPropertyTruthy({x:'a',y:null,z:'c'},'y')).toBe(false); 
    expect(checkPropertyTruthy({x:'a',b:'b',z:undefined},'z')).toBe(false); 
  })
});