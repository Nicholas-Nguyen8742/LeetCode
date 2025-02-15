function isPerfectSquare(num: number): boolean {
  for (let i = 1; i <= num; i++) {
    const squaredNum = i * i;
    if (squaredNum === num) {
      return true;
    }

    if (squaredNum > num) {
      return false;
    }
  }

  return false;
};