'use strict'
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const store = require('../store')

const onDisplayGame = function () {
  console.log('onDisplayGame')
  const token = store.user.token
  //event.preventDefault()
  api.displayGame(token)
    .then(ui.displayGameSuccess)
    .catch(ui.displayGameFailure)
}

module.exports = {
  onDisplayGame
}
