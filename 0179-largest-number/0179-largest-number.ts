function largestNumber(nums: number[]): string {
  const arrString = nums.map(String).sort(lambdaSort);
  return arrString[0] === '0' ? '0' : arrString.join('');
};

function lambdaSort(a, b) {
  return (b + a) - (a + b);
};