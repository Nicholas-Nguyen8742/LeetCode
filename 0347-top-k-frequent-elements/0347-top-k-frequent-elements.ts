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
  const max = Math.max(...Array.from(map.values()));
  let result: number | undefined;

  for (const [key, value] of map) {
    if (max === value) {
      result = key;
      break;
    }
  }

  return result;
};