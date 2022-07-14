// Commented out to avoid cluttering the console

// Console log
console.log("Binge JavaScript...\nThe output is: ");

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
    const tipPercent = Number(tip / 100)
    const tipAmount = food * tipPercent
    const total = Addition(food, tipAmount)
    return total
}

// console.log(TipCalc(300, 20))

// ES6 - arrow functions
// () => {}
// sum with arrow function and implicit return
const sumArrow = (a, b) => a + b
// console.log(sumArrow(1, 2));

// Completed Function exercise (01:11:40)

// Arrays
const fruits = ["🍞", "🍎", "🍌", "🍐", "🍒", "🍑", "🍍"]
// 2nd index
// console.log(fruits[1]);

// array push
fruits.push("🍓")
// console.log(fruits)

// array splice
// console.log(fruits.slice(0, 2))
// console.log(fruits.slice(2, 5))
// console.log(fruits.slice(1, 4))
// console.log(fruits.slice(3, 5))

// array indexOf
// console.log(fruits.indexOf("🍐"))

// array length
// console.log(fruits.length)

// objects{}
// key: value pairs
const person1 = {
    name1: "Raihan",
    age1: 26,
    favoriteFood1: "Apple",
    favoriteColor1: "Yello"
}

// console.log(person.name1, person.age1, person.favoriteFood1, person.favoriteColor1)

// dot notation
// console.log(person.name1)

// bracket notation
// console.log(person["favoriteFood1"])

// assign object
person1['phone1'] = "123-456-7890"
// console.log(person.phone1)

const person2 = {
    name2: 'Qazi',
    shirt2: 'black'
}

person2['YT2'] = 'Clever Programmer'
// console.log(person2['YT2'])

// ES5 arrow function with arg, object and template literals and methods (this)
const introduction = (name, shirt, age, phone) => {
    const personN = {
        name: name,
        shirt: shirt,
        age: age,
        phone: phone,
        assets: 100000,
        liabilities: 50000,
        netWorth: function() {
            return this.assets - this.liabilities
        }
    }
    const intro = `Hi, my name is ${personN.name} and my the color of my shirt is ${personN.shirt}. \nI am ${personN.age} years old and my phone number is ${personN.phone}.\nMy networth is $${personN.netWorth()} USD`
    return intro

}
// console.log(introduction("Raihan", "black"))
// console.log(introduction("Qazi", "white", "26", "123-456-7890"))

// for loops
// for (let i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i])
// }

for (const fruit of fruits){
    // console.log(fruit)
}

const doubleF = (num3) => {
    let doubled = []
    // let squared = []
    for (const num of num3){
        doubled.push(num * 2)
        // squared.push(num ** 2)
    }
    return doubled
    // return squared
}
// console.log(doubleF([1, 3, 6, 9, 12, 15]))

// letter counter 
const letterCounter = (phrase) => {
    let result = 0;
    // for in and of
    for(const index in phrase){
        console.log(Number(index) + 1)
        result = Number(index) + 1
    }
    return { result }
}
// const phrase = 'How many letters in this phrase?'
const phrase = prompt("Enter a phrase: ")

console.log(letterCounter(phrase))

