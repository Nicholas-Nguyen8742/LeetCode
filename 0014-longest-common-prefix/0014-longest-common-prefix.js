/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const res = strs.map((el) => el.split(''));
    let stop = false;
    let string = '';
    for (let i = 0; i < res[0].length; i++) {
      if (!(Array.from({ length: strs.length }, (x, index) => res[0][i] === res[index][i]).includes(false)) && !stop) {
        string += res[0][i];
      } else {
        stop = true;
      }
    }
    return string;
};