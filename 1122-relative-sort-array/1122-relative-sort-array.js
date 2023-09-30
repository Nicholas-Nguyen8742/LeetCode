/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const length = arr2.length - 1;
    return arr2.reduce((acc, curr, index) => {
        acc.push(Array(arr1.filter((el) => el === curr).length).fill(curr));
        return index == length ?  acc.concat(arr1.filter((el) => !arr2.includes(el)).sort((a, b) => a - b)).flat(1) : acc;
    }, []);
};