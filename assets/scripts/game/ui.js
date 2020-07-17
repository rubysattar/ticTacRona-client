'use strict'
const store = require ('../store')

const displayGameSuccess = function () {
  //$('#game-message')//What should happen if the game started successfully?
  console.log('GAME DISPLAYED')
}

const displayGameFailure = function () {
  $('#game-message').text('Game could not be started.')
}
const createGameFailure = function () {
  $('#game-message').text('Game could not be started.')
}
const createGameSuccess = function () {
  console.log('Game CREATED SUCCESSFULLY')
}

module.exports= {
  displayGameSuccess,
  displayGameFailure,
  createGameFailure,
  createGameSuccess
}
