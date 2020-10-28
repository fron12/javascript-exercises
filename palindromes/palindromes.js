const palindromes = function(str) {
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let strChars = str.split("");
    let onlyLetters = strChars.filter(function(letter){
        return punctuation.indexOf(letter) === -1;
    }) 
    let originalStringJoined = onlyLetters.join("").split(" ").join("").toLowerCase();
    let reversedStringJoined = onlyLetters.reverse().join("").split(" ").join("").toLowerCase();

    if(originalStringJoined === reversedStringJoined){
        return true;
    }
    else{
        return false;
    }
}
module.exports = palindromes
