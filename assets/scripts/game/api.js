'use strict'
const config = require('../config')
const store = require('../store')

const displayGame = function () {
  console.log(store)
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST'
  })
}

const createGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {}
  })
}

module.exports = {
  displayGame,
  createGame
}