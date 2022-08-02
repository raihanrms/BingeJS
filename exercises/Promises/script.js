const waitingSoup = () => console.log('soup')

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        // will always pick a random from the index out of the two items
        isReady = [true, false][Math.floor(Math.random() * 2)];
        isReady ? resolve('✅ Soup is ready 🥣'): reject('❌ No Soup today 🥔')
    }, 2000)
})

// .then is a function that takes a callback function
console.log(promiseOne
    .then(success => console.log({success}))
    .catch(error => console.log({error}))
)