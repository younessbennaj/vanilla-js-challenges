function sortArrayByObjectProperty(arr, key) {
  return arr.sort((x, y) => x[key] - y[key]);
}

describe('Sort array by object property', () => {
  it('should sort array by object property', () => {
   expect(sortArrayByObjectProperty([{a:1,b:2},{a:5,b:4}], 'b')).toStrictEqual([{a:1,b:2},{a:5,b:4}]) 
   expect(sortArrayByObjectProperty([{a:2,b:10},{a:5,b:4}], 'b')).toStrictEqual([{a:5,b:4},{a:2,b:10}])
   expect(sortArrayByObjectProperty([{a:1,b:7},{a:2,b:1}], 'b')).toStrictEqual([{a:2,b:1},{a:1,b:7}])
  });
});