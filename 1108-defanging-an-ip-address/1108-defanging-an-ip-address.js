/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let newIP = [];
    address.split("").map((el) => el === "." ? newIP.push("[.]") : newIP.push(el));
    return newIP.join("");
};