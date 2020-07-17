'use strict'



const signUpSuccess = function (response) {
  $('#message').text('Sign-up was successful!')
}

const signUpFailure = function (response) {
  $('#message').text('Sign-up was unsuccessful. Try again.')
}

const signInSuccess = function (response) {
  $('#message').text('Sign-in was successful!')
  
  $('#authenticated').show()
  $('#unauthenticated').hide()
}
const signInFailure = function () {
  $('#message').text('Sign-in failed.')
}
const changePasswordFailure = function() {
  $('#message').text('Password change failed')
}
const changePasswordSuccess = function(response) {
  $('#message').text('Successfully changed your password!')
}
const signOutSuccess = function () {
  $('#message').text('You are now signed out!')
  $('#unauthenticated').show()
  $('#authenticated').hide()

  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Sign out failed :(')
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
