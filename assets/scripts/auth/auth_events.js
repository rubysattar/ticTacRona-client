'use strict'
const api = require('./auth_api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./auth_ui')
const gameApi = require('../game/game_api')
const store = require('../store')
const gameEvents = require('../game/game_events')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .then($('#sign-up').hide())
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then((response) => {
      // console.log({response})
      store.user = response.user
    })
    .then(ui.signInSuccess)
    .then(gameEvents.onCreateGame)
  // the game should be created at this point
    .catch(error => {
      const errorMessage = error.responseJSON.message
      ui.signInFailure(errorMessage)
    })
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
