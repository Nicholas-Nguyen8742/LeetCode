/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const rev = parseInt(x.toString().split('').reverse().join(''));
    if (rev > (Math.pow(2, 31) - 1) || rev < (Math.pow(2, 31) * -1)) return 0;
    if (x < 0) return -(rev);
    return rev;
};