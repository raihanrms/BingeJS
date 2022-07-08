// Commented out to avoid cluttering the console

// Console log
console.log("Binge JavaScript...");

// variables
let name = "Raihan";
let age = 26;

// console.log(name, age);

// sentences
sentence1 = "Hello World, I am " + name + " and I am " + age + " years old.";
// console.log(sentence1);

// operators
const prompt = require("prompt-sync")();

// wrap in number to avoid typecasting
let food = Number(('How much was the food: '));
let tipPercent = Number(('What is the tip percentage: ')) / 100;
tipAmount = food * tipPercent;
total = food + tipAmount

// console.log("The tip amount is $" + tipAmount);
// console.log("The total is $" + total);

// data types
// Ctrl + I for emoji 

// Time: 24:18


// console out random number with Math.random() and Math.floor()
let GenRandomNum = (Math.floor(Math.random() * 10));
//console.log(GenRandomNum);

// var - variable - can change (not recommended)
// const - constant (cannot be changed)
// let - let (value can be changed)

// weather app (conditional)
// if rain "Grab an umbrella ☂" else "Wear a sunglasses 🕶" 
// conditional operator (if, else if, else)
// ==, ===, !=, !==, >, <, >=, <=

// let weather = prompt("How is it outside: ")
// if (weather == "rain") {
//     console.log("Grab an umbrella ☂");
// } else {
//     console.log("Wear a sunglasses 🕶");
// }

// 40:00

// functions - reusable code
function AskName() {
    let name = prompt("What is your name: ");
    console.log("Hello " + name);
}
// calling the function
// AskName()

// dynamic function
function AskNameInc(name) {
    console.log("Hello " + name);
}
// AskNameInc("Raihan");

// template literals - backtick (`)
function StartFunc(name){
    greet = `Hello ${name}`;
    console.log(greet);
}
// StartFunc("Testing")

// return - return a value from a function
function Addition(num1, num2){
    return num1 + num2
       
}
Add1 = Addition(1, 2)
// console.log(Add1)

// tip calculator with function
function TipCalc(food, tip){
    tipPercent = Number(tip / 100);
    tipAmount = food * tipPercent;
    total = Addition(food, tipAmount);
    return total;
}

// console.log(TipCalc(300, 20))

// ES6 - arrow functions
// () => {}