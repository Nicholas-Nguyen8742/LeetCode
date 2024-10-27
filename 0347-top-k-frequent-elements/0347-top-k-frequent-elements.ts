function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();

  nums.forEach((num) => {
    const search = map.get(num);
    map.set(num, search != null ? search + 1 : 1);
  });

  let result = [];
  let i = 0;
  while (i < k) {
    const removedElement = findNextMaxValue(map);
    map.delete(removedElement);
    result.push(removedElement);
    i++;
  }

  return result;
};

var findNextMaxValue = function(map: Map<number, number>): number {
  let max = {
    value: -Infinity,
    count: -Infinity,
  };

  for (const [key, value] of map) {
    if (max.count < value) {
      max.value = key;
      max.count = value;
    }
  }

  return max.value;
};