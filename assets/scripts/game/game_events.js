'use strict'
const api = require('./game_api')
const getFormFields = require('../../../get-form-fields')
const ui = require('./game_ui')

const cells = document.querySelectorAll('.cell')

const onReset = function (event) {
  event.preventDefault()
  document.querySelector('.endGame').getElementsByClassName.display = 'none'
  ui.gameBoard = Array.from(Array(9).keys())
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = ''
    cells[i].on('click', logClick) 
  }
}

//not sure if the following is necessary. not clear exactly what needs to be passed to api
const logClick(cell) {
  // we want this function to pass the id of the cell that was clicked 
  // to the user's data
  console.log(cell.target.id)
}

module.exports = {
  onReset
}