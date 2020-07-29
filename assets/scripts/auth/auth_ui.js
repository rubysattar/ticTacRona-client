'use strict'
const store = require('../store')

const signUpSuccess = function (response) {
  $('#message').text('Sign-up was successful!')
  $('#playAgain').hide()
  $('#sign-up').hide()
  $('form').trigger('reset')
  $('#sign-in').show()
}

const signUpFailure = function (response) {
  $('#message').text('Sign-up was unsuccessful. Try again.')
  $('#playAgain').hide()
  $('#sign-up').show()
  $('form').trigger('reset')
}

const signInSuccess = function (response) {

  // I can have the board clear here after signing in again successfully
  $('#message').text('Sign-in was successful!')
  $('form').trigger('reset')
  $('#authenticated').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#unauthenticated').hide()
  $('#gameBoard').show()
  $('.scoreboard').show()
  $('#landing-page').hide()
}
const signInFailure = function (errorMessage) {
  if (errorMessage) {
    $('#message').text(`Sign-in failed. Reason: ${errorMessage}`)
  } else {
    $('#message').text('Sign-in failed.')
  }
  $('#playAgain').hide()
  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#message').text('Password change failed')
  $('form').trigger('reset')
}
const changePasswordSuccess = function (response) {
  $('#message').text('Successfully changed your password!')
  $('form').trigger('reset')
  $('#change-password').hide()
}
const signOutSuccess = function () {
  $('#message').text('You are now signed out!')
  $('#unauthenticated').show()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#gameBoard').hide()
  $('#playAgain').hide()
  $('#landing-page').show()
  store.user = null
}
const signOutFailure = function () {

}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
