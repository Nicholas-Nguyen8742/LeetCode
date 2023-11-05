/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const copy = [...nums];
    return nums.reduce((acc, curr, index) => {
        let product = copy.reduce((acc2, curr2, i2) => i2 !== index ? (acc2 * curr2) : acc2, 1);
        acc[index] = product;
        return acc;
    }, nums);
};