/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
  let result = [-1, -1];
  let primes = [];

  for (let candidate = left; candidate <= right; candidate++) {
    if (candidate % 2 == 0 && candidate > 2) {
      continue;
    }

    const primesLength = primes.length;

    if (isPrime(candidate)) {
      if (primesLength && candidate <= primes[primesLength] + 2) {
        return [primes[primesLength], candidate];
      }
      primes.push(candidate);
    }
  }

  if (primes.length < 2) {
    return [-1, -1];
  }

  let minDiff = 1452;

  for (let i = 1; i < primes.length; i++) {
    const currDiff = primes[i] - primes[i - 1];
    if (currDiff < minDiff) {
      minDiff = currDiff;
      result = [primes[i - 1], primes[i]];
    }
  }


  return result;
};

var isPrime = function(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};