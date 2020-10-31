const getTheTitles = function(arr) {
    // From the array of objects, return an array of the objects' titles
    return arr.map(book => book.title);
}

module.exports = getTheTitles;
