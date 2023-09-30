/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let stop = false;
    let string = '';
    for (let i = 0; i < strs[0].length; i++) {
      if (!(Array.from({ length: strs.length }, (x, index) => strs[0].charAt(i) === strs[index].charAt(i)).includes(false)) && !stop) {
        string += strs[0].charAt(i);
      } else {
        stop = true;
      }
    }
    return string;
};