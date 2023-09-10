/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    k -= 1;
    return s.split(' ').filter((el, i) => i <= k).join(' ');
};