/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").map((element) => element.split("").reverse().join("")).join(" ");
};