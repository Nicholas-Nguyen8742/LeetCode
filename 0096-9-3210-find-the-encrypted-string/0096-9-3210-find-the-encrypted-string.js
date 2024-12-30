/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s, k) {
    let encryptedString = '';
    let length = s.length;

    for (let i = 0; i < length; i++) {
        encryptedString += s[(i + k) % length];
    }

    return encryptedString;
};