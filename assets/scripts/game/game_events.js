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
// a function to log every move a player makes
// updateGame should be called every time a move is made
// will store that move in store.data.game
// and add an 'x' or 'o' to the game object
const onLogClick = function (cell) {
  store.game += cells.target.id
}

// function turn (cellId, currentPlayer){}

module.exports = {
  onReset,
  onLogClick,
  onCreateGame
}
