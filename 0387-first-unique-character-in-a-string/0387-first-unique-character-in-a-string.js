/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let i = 0;
    while (s.length > i) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return s.indexOf(s[i]);
        }
        i++;
    }
    return -1;
};