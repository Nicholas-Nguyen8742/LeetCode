/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function(nums) {
  nums[0] = nums[0] - getPrime(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    let prime = nums[i];
    while (true) {
      prime = getPrime(prime);
      if (prime <= 1) {
        prime = 0;
        break;
      }

      if (nums[i] - prime > nums[i - 1]) {
        nums[i] = nums[i] - prime;
        break;
      }
      continue;
    }

    if (nums[i - 1] < nums[i]) {
      continue;
    }

    return false;
  }

  return true;
};

var getPrime = function(number) {
  while (number > 1 && !isPrime(--number)) {
    continue;
  }

  return number > 1 ? number : 0;
};

var isPrime = function(n) {
  if (n <= 1) {
    return false;
  }

  if (n === 2 || n === 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5; i <= Math.sqrt(n); i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
};
