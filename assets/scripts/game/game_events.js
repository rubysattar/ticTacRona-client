/* eslint-disable no-tabs */
/* eslint-disable indent */
'use strict'
const gameApi = require('./game_api')
const getFormFields = require('../../../lib/get-form-fields')
const gameUi = require('./game_ui')
const store = require('../store')
const { createNewGame } = require('./game_api')

// these are the data-cell-indices of winning combinations
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const gameBoard = document.querySelectorAll('.cell')

let turn = true
let wins = 0

const onCreateGame = function () {
  gameApi.createNewGame()
  .then(newGame => {
	// console.log({newGame})
  gameUi.gameStartSuccess()
  store.game = newGame.game
  })
  .catch(error => {
	// console.error(error.responseText)
	const errorMessage = error.responseText
	gameUi.gameStartFailure(errorMessage)
  })
}

const onReset = function (event) {
  // make sure this button doesn't JUST clear the board
  // it should also post a new game to be tracked
  event.preventDefault()
  document.querySelector('.endGame').getElementsByClassName.display = 'none'
  gameUi.gameBoard = Array.from(Array(9).keys())
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].innerText = ''
    $('#playAgain').on('click', createNewGame)
  }
}

const onGameOver = function () {
  event.preventDefault()
  gameApi.gameOver()
    .then()
    .catch()
}

// a function to log every move a player makes
// updateGame should be called every time a move is made
// will store that move in store.game
// and add an 'x' or 'o' to the game object
const onUpdateGameState = function (clickEvent) {
  const cellIndex = clickEvent.currentTarget.dataset.cellIndex
  // player is a variable, which holds a ternary operator that changes
  // the player depending on the turn. Turn is a boolean. If it's true(x) or false(o)
  const player = turn ? 'X' : 'O'
  if (clickEvent.target.innerText === '') {
    clickEvent.target.innerText = player
    gameApi.patchGame(cellIndex, player, false)
      .then()
      .catch()
    turn = !turn
  }
  // need to come up with game logic for game over

  // checkForWin function will be called here
    const hasWon = checkForWin(player)
  // There should be an IF statement here that only allows you to change turns
  // if the game is NOT over
  // If the game IS over, then return turn
    return turn
  }

// I have a winningCombos array I want to use to check for wins
const checkForWin = function (player) {
  // REMEMBER FOR-OF = ARRAYS, FOR-IN = OBJECTS
  for (const winningCombo of winningCombos) {
  // each winning combo has only 3 max positions
    const firstWinningPosition = winningCombo[0]
    const secondWinningPosition = winningCombo[1]
    const thirdWinningPosition = winningCombo[2]

  // now let's see if player's cell values match the winning combos
  // we want to go to the gameBoard at that position
  // the left side is a variable that will store the value at the winning gameBoard position
    const cellZeroValue = gameBoard[firstWinningPosition].innerText
    const cellOneValue = gameBoard[secondWinningPosition].innerText
    const cellTwoValue = gameBoard[thirdWinningPosition].innerText

    // now IF that winning gameboard position is EQUAL to the all three of the player's choices return TRUE
    // because the player's choices were winning choices. 
    if (
      cellZeroValue === player &&
      cellOneValue === player &&
      cellTwoValue === player
      ) {
        return true
      }
  } 
  // otherwise, if even one of the choices doesn't match, it's a losing play, so false
  // we went through all possible winning positions and the condition wasn't met
  return false
}

// This is one way to check for winner.. is incomplete

  // function checkWin(gameBoard, player) {
  //   let plays = gameBoard.reduce((a, e, i) =>
  //   (e === player)) ? a.concat(i) : a, []);
  //   let gameWon = null
  // }

// This is a giant if else statement to check for winner

// const checkWin = function (hasText) {
//   if ($('.m3').text(hasText) &&
//       $('.m1').text(hasText) &&
//       $('.m2').text(hasText)) {
// //   return true
// //   } else if ($('.t1').text(hasText) &&
//       $('.t2').text(hasText) &&
//       $('.t3').text(hasText)) {
// //   return true
// //   } else if ($('.b1').text(hasText) &&
//       $('.b2').text(hasText) &&
//       $('.b3').text(hasText)) {
// //   return true
// //   } else if ($('.t1').text(hasText) &&
//       $('.m1').text(hasText) &&
//       $('.b1').text(hasText)) {
// //   return true
// //   } else if ($('.t2').text(hasText) &&
//       $('.m2').text(hasText) &&
//       $('.b2').text(hasText)) {
// //   return true
// //   } else if ($('.t3').text(hasText) &&
//       $('.m3').text(hasText) &&
//       $('.b3').text(hasText)) {
// //   return true
// //   } else if ($('.t1').text(hasText) &&
//       $('.m2').text(hasText) &&
//       $('.b3').text(hasText)) {
// //   return true
// //   } else if ($('.b1').text(hasText) &&
//       $('.m2').text(hasText) &&
//       $('.t3').text(hasText)) {
//   return true
//   } else {
//   return false
//   }
// }


module.exports = {
  onReset,
  onUpdateGameState,
  onCreateGame,
  checkForWin,
  onGameOver
}
