/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let res = '';
    const regex = new RegExp(`[${s}]`);
    t.split('').forEach((el) => {
        if (s.startsWith(res + el)) res += el;
    });
    return res === s;
};