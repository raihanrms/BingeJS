console.log('Async and Await!')

// const waitingSoup = () => console.log('soup')

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        // will always pick a random from the index out of the two items
        isReady = [true, false][Math.floor(Math.random() * 2)];
        isReady ? resolve('✅ Soup is ready 🥣'): reject('❌ No Soup today 🥔')
    }, 2000)
})

// .then is a function that takes a callback function
// console.log(promiseOne
//     .then(success => console.log({success}))
//     .catch(error => console.log({error}))
// )

// fetch is a promise that returns a response
// console.log('fetch:', fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// // access to the actual data
// .then(data => console.log(data))
// )

// Async and Await
// Rules for using async and await:
// 1. Must be in a function, 2. Use the keyword 'async' 3. Use the word 'await'
const getDog = async () => {
    // await waits for the promise to resolve
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url) 
    const data = await response.json()
    console.log(data)
}
getDog()

// Resolved - pay the waiter
// Rejected - leave the store

// get soup using async and await
const getSoupAsyncAwait = async () => {
    
    // object that represents the promise
    const data = {rating: null, tip: null, pay: null, review: null}
    
    try {
    const soup = await promiseOne
    console.log(soup)
    data.rating = 5
    data.tip = .2
    data.pay = 10
    data.review = 5
    return data

} catch(error) {
    console.log('error:', error)
    data.rating = 1
    data.tip = 0
    data.pay = 0
    data.review = 1
    return data
    }
}

// to get this function we have to console log the value
getSoupAsyncAwait().then(value => console.log(value))