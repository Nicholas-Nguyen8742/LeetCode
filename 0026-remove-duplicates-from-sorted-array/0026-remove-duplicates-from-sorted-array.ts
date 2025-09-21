function removeDuplicates(nums: number[]): number {
  const set = new Set(nums);
  const setArr = Array.from(set);
  setArr.forEach((num, i ) => {
    nums[i] = num;
  });

  return setArr.length;
};