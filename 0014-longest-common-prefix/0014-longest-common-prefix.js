/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let string = '';
    for (let i = 0; i < strs[0].length; i++) {
      if (!(Array.from({ length: strs.length }, (x, index) => strs[0].charAt(i) === strs[index].charAt(i)).includes(false))) {
        string += strs[0].charAt(i);
      } else {
        return string;
      }
    }
    return string;
};