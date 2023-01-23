/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split("").map((el) => el === "." ? "[.]" : el).join("");
};