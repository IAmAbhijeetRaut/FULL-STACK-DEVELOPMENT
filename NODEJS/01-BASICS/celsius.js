//Numbers - lets discuss and use the Numbers
var score = 100;

score = 130;

const bonus = 50;

var finalScore = (score + bonus) * 1.8;
 
//var complex = 4 + 4 *5 / 2 ; // looks bad in terms of real world use case scenario

var complex = ((4 + 4) * 5) / 2 ; // add paranthesis ,looks good in terms of real world use case scenario

//usage of modulus ' % '  operator gives remainder as a result

console.log("complex : ",complex); 

console.log("finalScore : ",finalScore);

let tempInFahrenheit = 90;

//do calculation
//(Fahrenheit - 32) * 5/9

let convertFahrenheitToCelsius = (tempInFahrenheit - 32) * 5/9 ;
console.log("convertFahrenheitToCelsius : ",convertFahrenheitToCelsius);