/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    const pal = [];
    words.map((el) => {
      if (el.split('').reverse().join('') === el) pal.push(el);
    });
    return (pal.length > 0) ? pal[0] : "";
};