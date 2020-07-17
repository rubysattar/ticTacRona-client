'use strict'
const store = require ('../store')

const displayGameSuccess = function () {
  $('#game-message')//What should happen if the game started successfully?
}

const displayGameFailure = function () {
  $('#game-message').text('Game could not be started.')
}

module.exports= {
  displayGameSuccess,
  displayGameFailure
}
