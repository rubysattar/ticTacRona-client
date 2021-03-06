'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/auth_events')
const gameEvents = require('./game/game_events')

// use require without a reference to ensure a file is bundled
// require('./example')

// Authentication Listeners
$(() => {
  $('#gameBoard').hide()
  $('#authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // Game listeners
  $('#playAgain').hide()
  $('.scoreboard').hide()
  // $('#playAgain').on('click', gameEvents.onReset)
  $('.cell').on('click', gameEvents.onUpdateGameState)
  $('#playAgain').on('click', gameEvents.onCreateGame)

  // css gameBoard
  $('.cell').css('background', 'transparent')
})
