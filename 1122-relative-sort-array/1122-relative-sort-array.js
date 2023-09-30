/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    return arr2.reduce((acc, curr, index) => {
      if (arr1.includes(curr)) {
        let i = arr1.filter((el) => el === curr).length;
        while (i > 0) {
          acc.push(curr);
          i --;
        }
      }
      if (index === arr2.length - 1) {
        const filtered = arr1.filter((el) => !arr2.includes(el)).sort((a, b) => a - b);
        return acc.concat(filtered);
      }
      return acc;
    }, []);
};