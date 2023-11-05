/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcds = function (x, y) {
    return !y ? x : gcds(y, x % y);
};

var gcdOfStrings = function(str1, str2) {
     if (str1 + str2 !== str2 + str1) {
        return "";
     }

    const div = gcds(str1.length, str2.length);

    return str1.slice(0, div);
};