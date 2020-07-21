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

const gameOver = function () {
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.games.over,
    method: 'GET',
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
  gameOver
}
