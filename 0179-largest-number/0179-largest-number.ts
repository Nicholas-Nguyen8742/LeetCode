function largestNumber(nums: number[]): string {
  const arrString = nums.map(String).sort((a: any, b: any) => (b + a) - (a + b));
  return arrString[0] === '0' ? '0' : arrString.join('');
};
