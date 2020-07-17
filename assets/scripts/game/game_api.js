'use strict'
const config = require('../config')
const store = require('../store')

const createNewGame = function () {
  return $.ajax({
    header: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {}
  })
}

module.exports = {
  createNewGame
}
