console.log('Dom Manupilation')

let titleDiv = document.getElementById('title')
console.log('before: ', titleDiv.innerText)

let message = 'Start Clicking!'
titleDiv.innerText = message;

// titleDiv.innerText = 'Hello Raihan'
console.log('after: ', titleDiv.innerText)

titleDiv.innerHTML = `<p>${message}</p>`

titleDiv.style.backgroundColor = 'red'

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// on click
// redDiv.onclick = () => console.log('Red')
// yellowDiv.onclick = () => console.log('Yellow')
// green.onclick = () => console.log('Green')

const squares = document.querySelectorAll('.colorSquare')
// for each loop
// squares.forEach(square => console.log(square.value))

const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value]++
    square.innerText = timesClicked[square.value]
  }
})


// stop function
function clearScores(){
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => {
    square.innerText= ''
  })
}

const ClearScoreBtn = document.getElementById('clear-score')
ClearScoreBtn.onclick = () => clearScores()