function frequencySort(nums: number[]): number[] {
  const map = new Map();
  let indexes = { };
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    const value = map.get(key);
    if (value != null) {
      const currIndex = indexes[key];
      const prev = result[currIndex];
      const newValue = value + 1;
      result[currIndex] = {
        ...prev,
        value: newValue
      }
      map.set(key, newValue);
    } else {
      result.push({ key, value: 1 });
      indexes[key] = result.length - 1;
      map.set(key, 1);
    }
  }

  return result.sort(sortComparator).flatMap(fillElement);
};

var sortComparator = function(a: { key: number; value: number; }, b: { key: number; value: number; }) {
  if (a.value === b.value) {
    return b.key - a.key; 
  } else {
    return a.value - b.value;
  }
}

var fillElement = function(el: { key: number; value: number; }) {
  return new Array(el.value).fill(el.key);
};