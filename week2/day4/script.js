let x = 5

console.log(x);

let z = 'abc';
console.log(typeof z); //string

z = 1 //would throw an error in strong typed languages
console.log(typeof z); //number

let test = 7 + 7 + 7;
        // Straight arithmetic resulting in a Number value.

test = 7 + 7 + "7";
        // The first two 7's are calculated (14), the last 7
        // is concatenated onto the 14 as a string.
        // resulting in a string value
        // "14" + "7" = "147"

test = "7" + 7 + 7;
        // The entire expression is implicitly converted
        // into a string and concatenated.
        // "7" + 7 = "77"; "77" + 7 = "777"

//function example 
let amountRaisedSoFar = 1000;

let donation = prompt("How much would you like to donate?"); 

amountRaisedSoFar = Number(donation) + amountRaisedSoFar;

console.log("We have now raised: " + amountRaisedSoFar + "!");

//type casting

let a = parseInt("10");
x = parseFloat("10.55");
x = toString(10.55);

//string concatenation
let greeting = "Hello,";
let name = "World X2";
console.log(greeting + " " + name + "!");

let surname = "Shane";
let age = 25;
console.log('Happy birthday ${surname}! How is ${age} treating you?');