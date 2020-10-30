const caesar = function(string, number) {
    let lowerCaseString = string.toLowerCase();
    const alphabetObjects = [
        {letter: "a" , number: 1},
        {letter: "b" , number: 2},
        {letter: "c" , number: 3},
        {letter: "d" , number: 4},
        {letter: "e" , number: 5},
        {letter: "f" , number: 6},
        {letter: "g" , number: 7},
        {letter: "h" , number: 8},
        {letter: "i" , number: 9},
        {letter: "j" , number: 10},
        {letter: "k" , number: 11},
        {letter: "l" , number: 12},
        {letter: "m" , number: 13},
        {letter: "n" , number: 14},
        {letter: "o" , number: 15},
        {letter: "p" , number: 16},
        {letter: "q" , number: 17},
        {letter: "r" , number: 18},
        {letter: "s" , number: 19},
        {letter: "t" , number: 20},
        {letter: "u" , number: 21},
        {letter: "v" , number: 22},
        {letter: "w" , number: 23},
        {letter: "x" , number: 24},
        {letter: "y" , number: 25},
        {letter: "z" , number: 26},
    ]
    // Takes the string and splits it.
        let splitString = lowerCaseString.split("")
    // Turns each index in the splitString array from a letter into a number and adds the number to it
        let stringToNumber = splitString.map(letter => {
            alphabetObjects.forEach(aObj => {
                if(letter === aObj.letter){
                    letter = aObj.number + number;
                    // If number is greater than 26 or less than 0 add or subtract it by 26 to 
                    // set to existing corresponding letter
                    
                    while(letter > 26){
                        letter = letter - 26;
                    }
                    while(letter < 0){
                        letter = letter + 26;
                    }
                }
                else{
                    letter = letter;
                }
            })
            return letter;
        })
    // Turn each index from a number to a letter
        let numbertoString = stringToNumber.map(number => {
            alphabetObjects.forEach(aObj => {
                if(number === aObj.number){
                    number = aObj.letter;
                }
                else{
                    number = number;
                }
            })
            return number;
        }).join("");
    // Capitalize the starting letter of each word
    let stringtoWords = numbertoString
                            .split(" ")
                            .map(word => {
                                return word.charAt(0).toUpperCase() + word.slice(1);
                            })
                            .join(" ")
    return stringtoWords;
}

module.exports = caesar
