function majorityElement(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let curr = nums[0];
  let majority = 0;

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (curr === nums[i]) {
      majority++;
    } else {
      majority = 0;
      curr = nums[i];
    }
    map.set(curr, majority);
  }

  let k = 0;
  let kElement = nums[0];
  const values = map.forEach((val, key) => {
    k = Math.max(k, val);
    if (val === k) {
      kElement = key;
    }
  });

  return kElement;
};