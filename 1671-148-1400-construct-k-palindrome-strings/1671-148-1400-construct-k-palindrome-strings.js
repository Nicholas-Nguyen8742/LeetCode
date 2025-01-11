/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (s.length < k) return false;

    if (s.length === k) return true;

    const frequency = new Array(26).fill(0);
    let oddCount = 0;

    for (const char of s) {
        frequency[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (const count of frequency) { if (count % 2 === 1) oddCount++ }

    return oddCount <= k;
};