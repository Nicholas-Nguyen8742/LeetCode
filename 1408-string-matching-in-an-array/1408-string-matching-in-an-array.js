/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    return words.sort((a, b) => a.length - b.length).filter((el) => {
       const temp = words.filter((word) => word.search(el) !== -1);
       if (temp.length > 1) {
         return temp[0];
       }
    });
};