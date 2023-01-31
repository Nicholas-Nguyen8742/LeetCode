/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    const sArr = s.split('')
    return Math.floor((sArr.filter((el) => {
        if (el === letter) return el;
    }).length / sArr.length) * 100);
};