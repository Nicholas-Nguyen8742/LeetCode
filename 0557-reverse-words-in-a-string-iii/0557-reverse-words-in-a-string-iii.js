/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(" ");
    return arr.map((element) => element.split("").reverse().join("")).join(" ");
};