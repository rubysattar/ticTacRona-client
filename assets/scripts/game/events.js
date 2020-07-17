'use strict'
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onDisplayGame = function () {
  console.log('onDisplayGame')
  //event.preventDefault()
  api.displayGame()
    .then(ui.displayGameSuccess)
    .catch(ui.displayGameFailure)
}

module.exports = {
  onDisplayGame
}
