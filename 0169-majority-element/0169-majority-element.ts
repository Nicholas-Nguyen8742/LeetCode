function majorityElement(nums: number[]): number {
  const map = new Map();
  nums.forEach((el) => map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1));
  const keys = [...map.keys()];
  return keys[[...map.values()].indexOf(Math.max(...map.values()))];
};