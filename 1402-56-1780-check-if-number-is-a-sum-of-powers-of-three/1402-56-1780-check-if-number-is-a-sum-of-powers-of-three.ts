function checkPowersOfThree(n: number): boolean {
  let power = 0;

  while (3 ** power <= n) {
    power += 1;
  }

  while (n > 0) {
    if (n >= 3 ** power) {
      n -= 3 ** power;
    }

    if (n >= 3 **power) {
      return false;
    }

    power -= 1;
  }

  return true;
};