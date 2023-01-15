/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    const arr = `${x}`.split('');
    const string = arr.toString();
    const reverse = [...arr].reverse().toString();
    return string === reverse ? true : false;
};