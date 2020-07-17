'use strict'
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const store = require('../store')

const onDisplayGame = function (event) {
  event.preventDefault()
  console.log('onDisplayGame')
  const token = store.user.token
  api.displayGame(token)
    .then(ui.displayGameSuccess)
    .catch(ui.displayGameFailure)
}
const onCreateGame = function (event) {
  console.log('onCreateGame')
  event.preventDefault()
  const token = store.user.token
  api.createGame(token)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

module.exports = {
  onDisplayGame,
  onCreateGame
}
