/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    const frequency = new Map();
    let toDeleteCount = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (frequency.has(char)) {
            frequency.set(char, frequency.get(char) + 1);
        } else {
            frequency.set(char, 1);
        }
    }

    for (const value of frequency.values()) {
        if (value % 2 === 1) {
            toDeleteCount += (value - 1);
        } else {
            toDeleteCount += (value - 2);
        }
    }

    return s.length - toDeleteCount;
};