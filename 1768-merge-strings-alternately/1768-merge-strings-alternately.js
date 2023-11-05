/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word = '', i = 0;
    while (word1.length > i || word2.length > i) {
        word += word1[i] || '';
        word += word2[i] || '';
        i++;
    }
    return word;
};