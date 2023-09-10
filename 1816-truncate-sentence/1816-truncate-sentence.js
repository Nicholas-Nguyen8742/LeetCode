/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let string = '';
    const arr = s.split(' ').forEach((el, i) => {
        if (i <= k - 1) {
            i === 0 ? string = el : string += ` ${el}`;
        }
    });
    return string;
};