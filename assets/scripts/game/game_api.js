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

module.exports = {
  createNewGame
}
