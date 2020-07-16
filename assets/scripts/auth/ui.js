'use strict'
const store = require ('../store')


const signUpSuccess = function (response) {
  $('#message').text('Sign-up was successful!')
}

const signUpFailure = function (response) {
  $('#message').text('Sign-up was unsuccessful. Try again.')
}

const signInSuccess = function (response) {
  $('#message').text('Sign-in was successful!')
  store.user = response.user
  console.log('store :', store)
  console.log('token: ',store.user.token)
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
