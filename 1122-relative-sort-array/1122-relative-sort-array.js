/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const length = arr2.length - 1;
    return arr2.reduce((acc, curr, index) => {
        let filled = [];
        if (index === length) filled = arr1.filter((el) => !arr2.includes(el)).sort((a, b) => a - b);
        const i = arr1.filter((el) => el === curr).length;
        acc.push(Array(i).fill(curr));
        return length === index ? acc.concat(filled).flat(1) : acc;
    }, []);
};