/* 
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

// Function that sums two numbers
function add(){
  const sum = (a, b) => a + b
  console.log(sum(10, 2))
}

// Function that subtracts two numbers
function sub(){
  const sub = (c, d) => c - d
  console.log(sub(3, 2))
}

// Function that divides two numbers
function div(){
  const div = (e, f) => e / f
  console.log(div(4, 2))
}

// Function that multiplies two numbers
function mult(){
  const mult = (g, h) => g * h
  console.log(mult(4, 2))
}

console.log('hello from the SUM exercise')
// add()
// sub()
// div()
// mult()
