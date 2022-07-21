// Getting random dog image with fetch from an API

// .then is a promise
// asyncronous programming

console.log("1st run")

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => console.log('2nd Run', json))

console.log("3rd run")

// 6:24:12