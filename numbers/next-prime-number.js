function nextPrimeNumber(a) {
  let start = a - 1;
  let isPrime = true;
  while(start > 1) {
      if(a%start === 0) {
          isPrime = false;
          break;
      }
      start--;
  }
  return isPrime ? a : nextPrimeNumber(a + 1);
}

module.exports = nextPrimeNumber;