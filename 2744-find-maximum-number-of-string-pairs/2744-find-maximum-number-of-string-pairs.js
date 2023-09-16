/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let pairs = 0;
    let arr = [];
    words.forEach((word) => {
        if (arr.includes(word.charAt(1) + word.charAt(0))) {
            pairs += 1;
        } else {
            arr.push(word);
        }
    });
    return pairs;
};
// var maximumNumberOfStringPairs = function(words) {
//     let pairs = 0, i = 0;
//     let arr = [];
//     while (i < words.length) {
//         let temp = words[i];
//         let word = temp.charAt(1) + temp.charAt(0);
//         if (arr.includes(word)) {
//             pairs += 1;
//         }
//         arr.push(words[i]);
//         i++;
//     }
//     return pairs;
// };