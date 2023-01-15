/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    const arr = `${x}`.split('').toString();
    const reverse = `${x}`.split('').reverse().toString();
    return arr === reverse ? true : false;
};