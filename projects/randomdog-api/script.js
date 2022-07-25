// Getting random dog image with fetch from an API

// .then is a promise
// asyncronous programming

console.log("Initial Check")

const dogImageDiv = document.getElementById("dogImage")
const dogButton = document.getElementById("dogButton")

const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            // console.log(json.message)
            dogImageDiv.innerHTML = `<img src="${json.message}" 
            height=500 width=500/>`
        })
}

// dogButton.onclick = () => console.log("Clicked to get a new dog image")
dogButton.onclick = () => getNewDog()
console.log("After Check")

// 6:32:12