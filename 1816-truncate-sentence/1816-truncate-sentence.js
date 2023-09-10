/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let string = '';
    const arr = s.split(' ');
    for (let i = 0; i <= k; i++) {
        if (i === k) return string;
        i === 0 ? string = arr[i] : string += ` ${arr[i]}`;
    }
};