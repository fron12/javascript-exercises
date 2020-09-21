const reverseString = function(str) {
    let rev = str.split("").reverse().join("");
    return rev;
}

module.exports = reverseString
