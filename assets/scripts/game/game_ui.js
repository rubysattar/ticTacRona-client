'use strict'
const store = require('../store')

let gameBoard


const cells = document.querySelectorAll('.cell')

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
module.exports = {
  gameBoard,
  gameStartFailure,
  gameStartSuccess,
  cells
}
