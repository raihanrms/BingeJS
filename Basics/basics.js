// Console log
console.log("Hello World");
console.log("Raihan Munim");

// variables
var name = "Raihan";
var age = 26;

console.log(name, age);

// sentences
sentence1 = "Hello World, I am " + name + " and I am " + age + " years old.";
console.log(sentence1);

// operators
const prompt = require("prompt-sync")();

var food = prompt('How much was the food: ');
var tipPercent = prompt('What is the tip percentage: ') / 100;
tipAmount = food * tipPercent
console.log("The tip amount is $" + tipAmount);
