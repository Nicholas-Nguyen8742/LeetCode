/**
 * @param {string} s
 * @return {boolean}
 */

var reverseString = function(string) {
    return string.split('').reverse().join('');
};

var isPalindrome = function(s) {
    const string = s.replace(/[^a-z0-9]+/gi, '').toLowerCase();
    return string === reverseString(string);
};