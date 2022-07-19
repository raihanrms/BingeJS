const prompt = require("prompt-sync")();

// exercice
const weather = prompt("Enter the weather: ")
const weatherScore = (weather) => {
    // rainy = -1, sunny = 0, cloudy = 1, snowy = 2
    let score = 0
    if (weather === "rainy"){
        score = -1
    } else if (weather === "sunny"){
        score = 0
    } else if (weather === "cloudy"){
        score = 1
    } else {
        (weather === "snowy")
        score = 2
    }
    return { score }
} 

console.log(weatherScore(weather))