'use strict'
const config = require ('../config')
const store = require ('../store')

const displayGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer '+ store.user.game.createdAt
    },
    url: config.apiUrl + '/games',
    method: 'POST'
  })
  console.log(displayGame)
}


module.exports = {
  displayGame
}
