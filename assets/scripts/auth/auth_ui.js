'use strict'
const store = require('../store')

const signUpSuccess = function (response) {
  $('#message').text('Sign-up was successful!')
  $('.endGame').hide()
  $('#sign-up').hide()
  $('form').trigger('reset')
  $('#sign-in').show()
  $('#start-over').hide()
}

const signUpFailure = function (response) {
  $('#message').text('Sign-up was unsuccessful. Try again.')
  $('.endGame').hide()
  $('#sign-up').show()
  $('form').trigger('reset')
  $('#start-over').hide()
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
  $('#start-over').show()
}
const signInFailure = function (errorMessage) {
  if (errorMessage) {
    $('#message').text(`Sign-in failed. Reason: ${errorMessage}`)
  } else {
    $('#message').text('Sign-in failed.')
  }
  $('.endGame').hide()
  $('form').trigger('reset')
  $('#start-over').hide()
}
const changePasswordFailure = function () {
  $('#message').text('Password change failed')
  $('form').trigger('reset')
}
const changePasswordSuccess = function (response) {
  $('#message').text('Successfully changed your password!')
  $('form').trigger('reset')
}
const signOutSuccess = function () {
  $('#message').text('You are now signed out!')
  $('#unauthenticated').show()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#gameBoard').hide()
  $('.endGame').hide()
  $('#landing-page').show()
  $('#start-over').hide()
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
