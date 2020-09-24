const removeFromArray = function(arr, ...rem) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < rem.length; j++){
            if(arr[i] === rem[j]){
                arr.splice(i, 1);
                rem.splice(j, 1);
                removeFromArray(arr, ...rem);
            }
        }
    }
    return arr;
}

module.exports = removeFromArray
