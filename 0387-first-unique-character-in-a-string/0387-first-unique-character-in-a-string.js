/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let match = -1, i = 0;
    while (s.length > i) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            match = s.indexOf(s[i]);
            return match;
        }
        i++;
    }
    return match;
};