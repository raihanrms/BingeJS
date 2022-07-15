// Write a function that takes a parameter (hours) and converts it to seconds
const prompt = require("prompt-sync")();

const howManySeconds = (hours) => {
    return hours * 3600
}
const hours = prompt("Enter hours: ")
console.log(howManySeconds(hours))