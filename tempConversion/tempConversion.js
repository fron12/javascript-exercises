const ftoc = function(num) {
  let celcius = ((num - 32) * 5) / 9;
  if(celcius !== 0){
    return parseFloat(celcius.toFixed(1));
  }
  else{
    return celcius;
  }
}

const ctof = function(num) {
  let fahrenheit = ((num / 5) * 9) + 32;
  if(fahrenheit !== 0){
    return parseFloat(fahrenheit.toFixed(1));
  }
  else{
    return fahrenheit;
  }
}

module.exports = {
  ftoc,
  ctof
}
