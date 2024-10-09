function isHappy(n: number): boolean {
  const stringified = `${n}`;
  if (stringified.length === 1) {
    return ['1', '7'].includes(stringified);
  }
  
  const sum = stringified.split('').reduce((acc, curr) => {
    acc += toSquared(curr);
    return acc;
  }, 0);

  return isHappy(sum);
};

function toSquared(n: string): number {
  return Math.pow(parseInt(n), 2);
};