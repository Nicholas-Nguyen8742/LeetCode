/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    const length = words.length;
    let count = 0;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (i === j) continue;
    
            const str1 = words[i];
            const str2 = words[j];

            if (str1.length > str2.length) {
                continue;
            }

            if (str2.startsWith(str1) && str2.endsWith(str1)) {
                count++;
            }
        }
    }

    return count;
};