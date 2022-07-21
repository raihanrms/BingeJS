/*
  Rock Paper Scissors 🚀🔥
  Ran this with live server
*/

// Storing the scores as a global variable
const totalScore = {computerScore: 0, playerScore: 0}

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}  
// Testing
//console.log(getComputerChoice());

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0; 

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;

  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;

  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1; 
    
  // Otherwise human loses (aka set score to -1)
  } else {
    score = -1;
  }
  
  // return score
  return score;
}

//console.log(getResult('Rock', 'Rock'));

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById('result')
  
  switch (score){
    case -1:
      result.innerText = `You Lose!`;
      break;
    case 0:
      result.innerText = `It's a Draw!`;
      break;
    case 1:
      result.innerText = `You Win!`;
      break;
    }
    

  let playerScore = document.getElementById('player-score')
  let computerScore = document.getElementById('computer-score')
  let winning = document.getElementById('winning')
  let hands = document.getElementById('hands')
  
  
  hands.innerText = `🧔 ${playerChoice} vs 🤖 ${computerChoice}`;
  playerScore.innerText = `Your Score: ${totalScore['playerScore']}`;
  computerScore.innerText = `Computer Score: ${totalScore['computerScore']}`;

  // show who is winning
//   if (totalScore['playerScore'] > totalScore['computerScore']) {
//     winning.innerText = `You are winning!🙌 `;
//   } else {
//     winning.innerText = `Computer is winning!🐑 `;
//   }

// }

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  // console.log(playerChoice)
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value, computerChoice)
  
  showResult(score, playerChoice.value, computerChoice)

  // Testing the function
  // console.log({playerChoice});
  // console.log({computerChoice})
  // console.log({score})
  // console.log({showResult})

  // Update the score
  // totalScore['playerScore'] += score
  // totalScore['computerScore'] += score
  // console.log(totalScore)
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  let rpsButtons = document.querySelectorAll('.rpsButton');
  // console.log(rpsButtons);

  // rpsButtons.forEach(rpsButtons => console.log(rpsButtons));
  rpsButtons.forEach(rpsButtons => {
    rpsButtons.onclick = () => onClickRPS(rpsButtons);
  })

  // Add a click listener to the end game button that runs the endGame() function on click
  let endGameButton = document.getElementById('endGameButton');
    endGameButton.onclick = () => endGame(totalScore); 
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0
  
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  
  
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()