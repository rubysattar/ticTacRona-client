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
  $('#start-over').hide()
}
const gameStartSuccess = function () {
  $('#message').text('Game started successfully!')
  $('.endGame').hide()
  $('#start-over').show()
}

const startOverSuccess = function () {
  $('#message').text('Lucky you! You can start over!')
  $('#start-over').trigger('reset')
}

const startOverFailure = function () {
  $('#message').text('Could not start the game over.')
}

const updateWins = function () {
  const wins = $('#wins')
  
}
const updateDraws = function() {
  $('#draws').text()
}

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
  $('.endGame').show()
}

module.exports = {
  gameStartFailure,
  gameStartSuccess,
  updateWins,
  updateDraws,
  tellPlayerTheyWon,
  tellPlayerTiedGame,
  tellPlayerHowManyGames,
  showPlayAgainButton,
  gameBoard,
  startOverSuccess,
  startOverFailure
}
