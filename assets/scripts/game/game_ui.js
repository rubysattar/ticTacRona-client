'use strict'

let gameBoard
let currentPlayer
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

const gameStartFailure = function (errorMessage) {
  if (errorMessage) {
    $('#message').text(`Game start failed. Reason: ${errorMessage}`)
  } else {
    $('#message').text('Game start failed.')
  }
}
const gameStartSuccess = function () {
  $('#message').text('Game started successfully.')
}
module.exports = {
  gameBoard,
  currentPlayer,
  winningCombos,
  gameStartFailure,
  gameStartSuccess
}
