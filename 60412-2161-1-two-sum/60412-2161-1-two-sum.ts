function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
   let j = 0;
   while (j < nums.length) {
     if (i === j) {
        j++;
        continue;
     }

     if (nums[j] + nums[i] === target) return [i, j]
     j++;
   }
 }
};