function frequencySort(nums: number[]): number[] {
  let indexes = { };
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    const possibleIndex = indexes[key];
    if (possibleIndex == null) {
      result.push({ key, value: 1 });
      indexes[key] = result.length - 1;
    } else {
      let element = result[possibleIndex];
      const newValue = element.value + 1;
      result[possibleIndex] = {
        key,
        value: newValue
      }
    }
  }

  return result
    .sort((a, b) => a.value === b.value ? b.key - a.key : a.value - b.value)
    .flatMap((el) => new Array(el.value).fill(el.key));
}