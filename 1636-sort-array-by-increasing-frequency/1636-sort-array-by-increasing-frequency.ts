function frequencySort(nums: number[]): number[] {
  let indexes = { };
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    if (!(key in indexes)) {
      result.push({ key, value: 1 });
      indexes[key] = result.length - 1;
    } else {
      const newValue = result[indexes[key]].value + 1;
      result[indexes[key]] = {
        key,
        value: newValue
      }
    }
  }

  return result
    .sort((a, b) => a.value === b.value ? b.key - a.key : a.value - b.value)
    .flatMap((el) => new Array(el.value).fill(el.key));
}