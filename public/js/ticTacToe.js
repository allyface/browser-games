let currentPlayer = 'X'
let squares = document.getElementsByClassName('square')
// let playerMoves = ['', '', '', '', '', '', '', '', '']
let wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function playerMove(square) {
   if (document.getElementById(square).innerText === 'X' || document.getElementById(square).innerText === 'O') {
     document.getElementById("message").innerText = "Please choose another square."
   } else {
    document.getElementById(square).innerText = currentPlayer
    checkForWin(currentPlayer)
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
      document.getElementById('message').innerText = "O's Turn"
    } else {
      currentPlayer = 'X'
      document.getElementById('message').innerText = "X's Turn"
    }
  }
}

function checkForWin(currentPlayer) {
  for (var i = 0; i < wins.length; i++) {
    let win = wins[i]
    if (
      squares[win[0]].innerText === currentPlayer &&
      squares[win[1]].innerText === currentPlayer &&
      squares[win[2]].innerText === currentPlayer
    ) {
      alert(currentPlayer + ' wins!')
      setTimeout(function() {reset()}, 1000)
    }
  }
}

function reset() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = ''
  }
  document.getElementById('message').innerText = 'X goes first!'
  currentPlayer = 'X'
}
