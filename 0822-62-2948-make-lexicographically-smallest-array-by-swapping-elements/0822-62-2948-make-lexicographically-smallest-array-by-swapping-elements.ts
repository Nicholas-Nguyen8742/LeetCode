function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
  const numsSorted = [...nums].sort((a, b) => a - b);
  let currGroup = 0;
  const numToGroup = new Map();
  numToGroup.set(numsSorted[0], currGroup);

  const groupToList = new Map();
  groupToList.set(currGroup, [numsSorted[0]]);

  for (let i = 1; i < numsSorted.length; i++) {
    if (Math.abs(numsSorted[i] - numsSorted[i - 1]) > limit) {
      currGroup++;
    }

    numToGroup.set(numsSorted[i], currGroup);

    if (!groupToList.has(currGroup)) {
      groupToList.set(currGroup, []);
    }
    groupToList.get(currGroup).push(numsSorted[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const group = numToGroup.get(num);
    nums[i] = groupToList.get(group).shift();
  }

  return nums;
};