/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.split(" ").filter((element) => element.length !== 0);
    return arr[arr.length - 1].length;
};