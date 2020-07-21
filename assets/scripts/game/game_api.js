'use strict'
const config = require('../config')
const store = require('../store')
const gameBoard = ['', '', '', '', '', '', '', '', '']

const createNewGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {}
  })
}

// games played should GET all games played
// this is important so that we can tellPlayerHowManyGames (ui)
const gamesPlayed = function () {
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    url: config.apiUrl + '/games/?over=true',
    method: 'GET'
  })
}
const patchGame = function (index, value, over) {
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }
  })
}
module.exports = {
  createNewGame,
  patchGame,
  gamesPlayed
}
