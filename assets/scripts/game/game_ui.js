'use strict'
const store = require('../store')

const gameBoard = document.querySelectorAll('.cell')

let wins = 0

const gameStartFailure = function (errorMessage) {
  if (errorMessage) {
    $('#message').text(`Game start failed. Reason: ${errorMessage}`)
  } else {
    $('#message').text('Game start failed.')
  }
}
const gameStartSuccess = function () {
  $('#message').text('Game started successfully!')
}

const updateWins = function () {
  const wins = $('#wins')
  
}
const updateDraws = function() {
  $('#draws').text()
}
module.exports = {
  gameStartFailure,
  gameStartSuccess,
  updateWins,
  updateDraws

}
