const repeatString = function(str, num) {
    let finStr = "";
    if(num < 0){
        return "ERROR";
    }
    for(let i = 0; i < num; i++){
        finStr += str;
    }
    return finStr;
}

module.exports = repeatString
