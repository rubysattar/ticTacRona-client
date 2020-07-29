'use strict'
const store = require('../store')

const gameBoard = document.querySelectorAll('.cell')

let wins = 0

// change pw and sign out should not show BEFORE signed in

const gameStartFailure = function (errorMessage) {
  if (errorMessage) {
    $('#message').text(`Game start failed. Reason: ${errorMessage}`)
  } else {
    $('#message').text('Game start failed.')
  }
}
const gameStartSuccess = function () {
  $('#message').text('Game started successfully!')
  $('#playAgain').hide()
  onReset()
}

const onReset = function () {
  // make sure this button doesn't JUST clear the board
  // it should also post a new game to be tracked
  for (let cell of gameBoard) {
    cell.innerText = ''
  }
}

// two function below for future scoreboard

// const updateWins = function () {
//   const wins = $('#wins')
// }
// const updateDraws = function() {
//   $('#draws').text()
// }

const tellPlayerTheyWon = function (player) {
  $('#game-end-message').text('Congratulations, ' + player + ' you won the game!')
}
const tellPlayerTiedGame = function () {
  $('#game-end-message').text('The game is tied!')
}
const tellPlayerHowManyGames = function (gamesPlayed) {
  $('#number-of-games-played').text('You have played ' + gamesPlayed + ' games')
}
const showPlayAgainButton = function () {
  $('#playAgain').show()
}

module.exports = {
  gameStartFailure,
  gameStartSuccess,
  tellPlayerTheyWon,
  tellPlayerTiedGame,
  tellPlayerHowManyGames,
  showPlayAgainButton,
  onReset
}
