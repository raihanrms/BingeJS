const prompt = require("prompt-sync")();

// exercice
const weather = prompt("Enter the weather: ")
const weatherScore = (weather1, weather2) => {
    // rainy = -1, sunny = 0, cloudy = 1, snowy = 2
    let score = 0
    if (weather1 === "rainy" && weather2 === "gloomy"){
        score = -10
    } else if (weather1 === "rainy"){
        score = -1
    } else if (weather1 === "cloudy"){
        score = 1
    } else {
        (weather1 === "snowy")
        score = 20
    }
    return { score }
} 

console.log(weatherScore(weather))