'use strict'
const store = require('../store')

const signUpSuccess = function (response) {
  $('#message').text('Sign-up was successful!')
  $('.endGame').hide()
  $('#sign-up').hide()
}

const signUpFailure = function (response) {
  $('#message').text('Sign-up was unsuccessful. Try again.')
  $('.endGame').hide()
  $('#unauthenticated').show()
  $('#sign-up').show()
}

const signInSuccess = function (response) {
  $('#message').text('Sign-in was successful!')
  $('#authenticated').show()
  $('#unauthenticated').hide()
  $('#gameBoard').show()
  $('.scoreboard').show()
}
const signInFailure = function (errorMessage) {
  if (errorMessage) {
    $('#message').text(`Sign-in failed. Reason: ${errorMessage}`)
  } else {
    $('#message').text('Sign-in failed.')
  }
  $('.endGame').hide()
}
const changePasswordFailure = function () {
  $('#message').text('Password change failed')
}
const changePasswordSuccess = function (response) {
  $('#message').text('Successfully changed your password!')
}
const signOutSuccess = function () {
  $('#message').text('You are now signed out!')
  $('#unauthenticated').show()
  $('#sign-out').hide()
  $('#gameBoard').hide()
  $('.endGame').hide()
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
