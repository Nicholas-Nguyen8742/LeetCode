/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let x = [];
    let y = [];
    nums.map((el, index) => index < n ? x.push(el) : y.push(el));
    let arr = [];
    x.map((el, index) => {
        arr.push(el);
        arr.push(y[index]);
    });
    return arr;
};