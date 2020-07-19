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

// not sure if the following is necessary. 
// not clear exactly what needs to be passed to api
const onLogClick = function (cell) {
  // we want this function to pass the id of the cell that was clicked 
  // to the user's data
  store.game += cells.target.id
  //turn (cells.target.id, gameUi.currentPlayer)
}

// function turn (cellId, currentPlayer){}

module.exports = {
  onReset,
  onLogClick,
  onCreateGame
}
