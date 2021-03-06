'use strict'

const gameBoard = document.querySelectorAll('.cell')

const gameStartFailure = function (errorMessage) {
  if (errorMessage) {
    $('#game-end-message').text(`Game start failed. Reason: ${errorMessage}`)
  } else {
    $('#game-end-message').text('Game start failed.')
  }
}
const gameStartSuccess = function () {
  $('#game-end-message').text('Game started successfully!')
  $('#playAgain').hide()
  $('#play-again-message').hide()
  onReset()
}

const onReset = function () {
  // make sure this button doesn't JUST clear the board
  // it should also post a new game to be tracked
  for (const cell of gameBoard) {
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
  $('#play-again-message').text('Press "Play Again" or "Sign Out"')
}
const tellPlayerSpotTaken = function () {
  $('#game-end-message').text('Whoops! That spot is taken!')
}

module.exports = {
  gameStartFailure,
  gameStartSuccess,
  tellPlayerTheyWon,
  tellPlayerTiedGame,
  tellPlayerHowManyGames,
  showPlayAgainButton,
  onReset,
  tellPlayerSpotTaken
}
