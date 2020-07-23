'use strict'
const api = require('./auth_api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./auth_ui')
const store = require('../store')
const gameEvents = require('../game/game_events')
const gameUi = require('../game/game_ui')

const signOutButton = document.getElementById('sign-out-button')
const gameBoard = document.getElementById('gameBoard')

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
    .then((userInfo) => {
      // console.log({response})
      store.user = userInfo.user
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
