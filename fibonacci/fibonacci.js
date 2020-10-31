const fibonacci = function(num) {
    // If num is negative, output "OOPS"
    if(num < 0) {
        return "OOPS"
    }
    // Make a loop that adds the previous two numbers and if not possible early on make numbers 0 or 1
    let fibNumber = [];
    for(let i = 0; i <= num; i++){
        if(i === 0){
            fibNumber.push(0);
        }
        else if(i === 1 || i === 2){
            fibNumber.push(1);
        }
        else {
            fibNumber.push(fibNumber[i - 2] + fibNumber[i - 1]);
        }
    }
    return fibNumber[num];
}

module.exports = fibonacci
