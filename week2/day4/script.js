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
console.log(`Happy birthday ${surname}! How is ${age} treating you?`);

let something;
console.log(typeof something) // "undefined"

// foo does not exist, it is not defined and has never been initialized:
//console.log(foo); // "ReferenceError: foo is not defined"

// foo is known to exist now but it has no type or value:
let foo = null; 
console.log(foo);// "null"

console.log(typeof nothing);//undefined

something;
console.log(typeof something); //undefined
console.log(something); //undefined

something = null;
console.log(typeof something); //"object"
console.log(something); //"null"

//if
//Simple if statement
x = true;
if(x) {
	console.log(true);
} else if (x == true) {
	console.log("this won't run");
} else {
	console.log(false);
}

//comparison
let f = 60;

if (f > 45) {
    console.log("I'm going hiking!");
} else {
    console.log("It's too cold to go hiking");
}

x = 10;
if(x == '10') { //Type coersion is happening here!
	console.log(true); //true
}

if(x === '10') {
	console.log(true); //false
}

/*(0 ==  '0') // true
(0 === '0') // false

('' ==  0 ) // true, the string will implicitly be converted to an integer
('' === 0 ) // false, no implicit cast is being made*/

let cup = 5
if(cup < 3){
    console.log("One more cup please");
} else { 
    console.log("nah dog I'm cool");
}

//thruthy/falsey values
if('abc') {
	// this block would run
}

if(10 && 'abc' && true) {
	// this block would run
}

let whatever; //whatever is undefined
if(whatever) {
	console.log(true);
} else {
	console.log(false); //this would run
}

if(!whatever){
	console.log(false); //this would run
}

if(false || 0 || null){
	console.log(true); //since none of these evaluate to true, this will not run
}

true && true 	// true
true && false 	// false
false && true 	// false
false && false 	// false

true || true 	// true
true || false 	// true
false || true 	// true
false || false 	// false

//short circuit evalutaion
//somevar && myFunction() //equivalant to if(somevar)
//somevar || myFunction() //equivalant to if(!somevar)

// example problem
let temp = 85;
let precipitation = false;
let indoors = true;

console.log("The temperature is " + temp + " degrees");

if (temp > 80 && precipitation === false) {
  console.log("time to swim!");
} else if (indoors) {
  console.log("time to swim!");
}

//for loop
for (let i = 0; i <= 9; i++) {
    console.log( i );
};

for (let bottle = 0; bottle <= 99; bottle++) {
    console.log(bottle);
    if (bottle === 99) {
        console.log("you're drunk")
    }
};
//while
let k = 0;
while(k < 10) {
    k = k + 1;
    // or x +=1
    // or x++
    break;
}

//do-while
let u = 0;
do {
    u = u + 1;
    // or x +=1
    // or x++
} while(u < 10);

//switch - better for if with lots of elses
let l = 1
switch(l) {
	case 3:
		console.log('three')
	case 1:
		console.log(1);
		//break;
	case 2:
		console.log(2);
		break;
	default:
		console.log('default')
}