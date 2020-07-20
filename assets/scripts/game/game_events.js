/* eslint-disable no-tabs */
/* eslint-disable indent */
'use strict'
const gameApi = require('./game_api')
const getFormFields = require('../../../lib/get-form-fields')
const gameUi = require('./game_ui')
const store = require('../store')

const cells = document.querySelectorAll('.cell')

const onCreateGame = function () {
  gameApi.createNewGame()
  .then(newGame => {
	console.log({newGame})
  gameUi.gameStartSuccess()
  store.game = newGame.game
  })
  .catch(error => {
	console.error(error.responseText)
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
const symbolHandler = function (cellValue) {
  if (!store.currentSymbol) {
    store.currentSymbol = 'X'
    // console.log(store.currentSymbol)
  }

  if (!cellValue) {
    return store.currentSymbol
  } else {
    // console.error('This is an error. reaching line 39')
  }
}

// a function to log every move a player makes
// updateGame should be called every time a move is made
// will store that move in store.game
// and add an 'x' or 'o' to the game object
const onUpdateGameState = function (clickEvent) {
  const cellIndex = clickEvent.currentTarget.dataset.cellIndex
  if (store.game) {
    let cellValue = store.game.cells[cellIndex]
    // come back and check if the game is over
    const gameOver = false
    console.log(cellValue)
    const newValue = symbolHandler(cellValue)
    cellValue = newValue
    console.log({cellValue})

    gameApi.patchGame(cellIndex, cellValue, gameOver)
      .then(updatedGame => {
        console.log('updated game coming back from patch game', updatedGame)
        store.game = updatedGame
      })
      .catch(error => {
        console.error(error)
      })
  }
  // const newValue = symbolHandler(cellValue)
  // $(clickEvent.currentTarget).attr('data-cell-value', newValue)
}

module.exports = {
  onReset,
  onUpdateGameState,
  onCreateGame
}
