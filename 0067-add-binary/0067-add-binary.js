/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    return (BigInt(aBin) + BigInt(bBin)).toString(2);
};