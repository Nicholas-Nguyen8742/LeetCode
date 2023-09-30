/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    return words.sort((a, b) => a.length - b.length).reduce((acc, curr) => {
      const temp = words.filter((word) => word.search(curr) !== -1);
       if (temp.length > 1) {
          acc.push(temp[0])
       }
      return acc;
    }, []);
};