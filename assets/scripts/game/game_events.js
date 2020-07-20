/* eslint-disable no-tabs */
/* eslint-disable indent */
'use strict'
const gameApi = require('./game_api')
const getFormFields = require('../../../lib/get-form-fields')
const gameUi = require('./game_ui')
const store = require('../store')

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

const cells = document.querySelectorAll('.cell')

let turn = true

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
  event.preventDefault()
  document.querySelector('.endGame').getElementsByClassName.display = 'none'
  gameUi.gameBoard = Array.from(Array(9).keys())
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = ''
    cells[i].on('click', logClick)
  }
}
// const symbolHandler = function (cellValue) {
//   let updatedCellValue;

//   if (!store.currentSymbol) {
//     store.currentSymbol = 'X'
//     // console.log(store.currentSymbol)
//   }

//   if (!cellValue) {
//     updatedCellValue = store.currentSymbol

//     if (store.currentSymbol === 'X') {
//       store.currentSymbol = 'O'
//     } else {
//       store.currentSymbol = 'X'
//     }
//   }

//   return updatedCellValue
// }

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
    return turn
  }
  // const newValue = symbolHandler(cellValue)
  // $(clickEvent.currentTarget).attr('data-cell-value', newValue)

module.exports = {
  onReset,
  onUpdateGameState,
  onCreateGame,
  winningCombos
}
