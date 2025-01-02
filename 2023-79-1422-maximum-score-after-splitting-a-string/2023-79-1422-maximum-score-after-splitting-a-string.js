/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let ones = 0;
    let zeros = 0;
    let best = -Infinity;

    const lastIndex = s.length - 1;

    for (let i = 0; i < lastIndex; i++) {
        if (s[i] == '0') {
            zeros += 1;
        } else {
            ones += 1;
        }

        best = Math.max(best, zeros - ones);
    }

    if (s[s.length - 1] == '1') {
        ones += 1;
    }

    return best + ones;
};