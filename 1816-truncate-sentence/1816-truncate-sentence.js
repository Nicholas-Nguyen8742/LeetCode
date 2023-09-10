/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const arr = s.split(' ').slice(0, k);
    return arr.join(' ');
};