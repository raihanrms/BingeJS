/* 
🌟 APP: Fighting Game

Create an updateGame() function that will update the DOM with the state of the game 👇
========================================

- updateGame()

These are the 2 classes you must create and their methods 👇
========================================

class Player {
  - strike()
  - heal()
}

class Game {
  - play()
  - checkIsOver()
  - declareWinner()
  - reset()
}

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'play' = Button to run simulation
#2 ID 👉 'result' = Div that holds the winner of the match
#3 ID 👉 'p1Health' = Div that holds player 1's health
#4 ID 👉 'p2Health' = Div that holds player 2's health
*/

// ** Grabs elements from the DOM and stores them into variables **
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')

// ** Check if either players health is  0 and if it is, then update isOver to true **
const updateGame = () => {
  } 


// ** Create the Player class which can create a player with all it's attributes and methods **
// qazi = Player('Qazi', 100, 7)
// qazi.name 👉 'Qazi'
// qazi.health 👉 100
// qazi.attackDmg 👉 7

class Player {
  constructor() {}
  // ** Attack an enemy with a random number from 0 to YOUR attackDmg bonus **
}

// ** Create the Game class with all it's attributes and methods to run a match **
class Game {
  constructor() {}
  
  // ** If the game is over and a player has 0 health declare the winner! **
  declareWinner() {

  }

  // ** Reset the players health back to it's original state and isOver to FALSE **
  reset() {

  }
  
  // ** Simulates the whole match untill one player runs out of health **



    // Make sure the players take turns untill isOver is TRUE



    // Once isOver is TRUE run the declareWinner() method 
  
}

// ** Create 2 players using the player class **


// ** Save original Player Data **


// ** Create the game object from the Game class **


// ** Save original Game Data **


// ** Add a click listener to the simulate button that runs the play() method on click and pass in the players **


// ** BONUS **
// Add functionality where players can press a button to attack OR heal

// ** Player 1 Controls **
document.addEventListener('keydown', function(e) {

});

// ** Player 2 Controls **
document.addEventListener('keydown', function(e) {
    
});

document.addEventListener('keydown', function(e) {
  
});