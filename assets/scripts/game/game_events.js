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
let gameIsOver = false

const onGetGameCount = function () {
  gameApi.gamesPlayed()
    .then(overGames => {
      const gamesPlayed = overGames.games.length
      // we have our length number
      // game ui function to display # of games played
      gameUi.tellPlayerHowManyGames(gamesPlayed)
    })
    .catch((error) => {
      console.error(error)
    })
}

const onCreateGame = function () {
  gameApi.createNewGame()
  .then(newGame => {
	 // console.log({newGame})
    gameUi.gameStartSuccess()
    store.game = newGame.game
    gameIsOver = false
  })
  .then(onGetGameCount)
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
  }
}

const onGameOver = function () {
  event.preventDefault()
  gameApi.gameOver()
    .then()
    .catch()
}
const isGameBoardFull = function () {
  // loop through gameBoard and check each cell to see if it has anything in it
  for (const cell of gameBoard) {
    // loop to see if you come across even one empty cell, then you know isGameBoardFull
    // will be false. an empty cell has .innertext === ''
    const cellValue = cell.innerText
    if (cellValue === "") {
      return false
    }
  }
  return true
}

// a function to log every move a player makes
// updateGame should be called every time a move is made
// will store that move in store.game
// and add an 'x' or 'o' to the game object
const onUpdateGameState = function (clickEvent) {
  // check global variable to see if we can start having something happen (OR NOT HAPPEN)
  // when it's true
  if (gameIsOver === true) {
    return
  }

  const cellIndex = clickEvent.currentTarget.dataset.cellIndex
  // player is a variable, which holds a ternary operator that changes
  // the player depending on the turn. Turn is a boolean. If it's true(x) or false(o)
  const player = turn ? 'X' : 'O'

  let valueOfCellTheyClicked = clickEvent.target.innerText

  if (clickEvent.target.innerText === '') {
    // here, we are changing the DOM. The innertext of the square clicked to either X or O
    clickEvent.target.innerText = player

    // variable to check if there's a winner
    const hasWon = checkForWin(player)

    if (hasWon === true) {
      gameIsOver = true
      gameUi.tellPlayerTheyWon(player)
    }

    const gameBoardIsFull = isGameBoardFull() 
    // check for game over if the board is full/tie game
    if (gameBoardIsFull === true) {
      gameIsOver = true
      gameUi.tellPlayerTiedGame()
    }

    gameApi.patchGame(cellIndex, player, gameIsOver)
      .then(updatedGame => {
        if (updatedGame.game.over === true) {
        // show play again button
        gameUi.showPlayAgainButton()
        } else {
          // insert everything you want to happen when game is not over
          store.game = updatedGame.game
          turn = !turn
          return turn
        }
      })
      // eslint-disable-next-line handle-callback-err
      .catch(error => {
        // console.log(error)
      })
  }
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

module.exports = {
  onReset,
  onUpdateGameState,
  onCreateGame,
  checkForWin,
  onGameOver,
  onGetGameCount
}
