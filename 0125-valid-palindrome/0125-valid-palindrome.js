/**
 * @param {string} s
 * @return {boolean}
 */

var cleanString = function(string) {
  return string.replace(/[^a-z0-9]+/gi, '').toLowerCase();
};

var reverseString = function(string) {
    return string.split('').reverse().join('');
};

var isPalindrome = function(s) {
    const string = cleanString(s);
    return string === reverseString(string);
};