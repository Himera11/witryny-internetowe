let boxes = document.querySelectorAll(".box")
let playerx = "X"
let playero = "O"
let currentturn = playerx
let gamerun = true
let gamewon = false

let boardState = Array(boxes.length)
boardState.fill(null)

let over = document.getElementById("over")
let winneris = document.getElementById("winner")
let playAgain = document.getElementById("play-again")

let wincombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]

boxes.forEach((box) => box.addEventListener("click", bloxclick))

function bloxclick(event) 
{
  if (gamerun != true) {
    return
  }

  let box = event.target
  let boxnum = box.dataset.id
  if (box.innerText != "") 
  {
    return
  }

  if (currentturn === playerx) 
  {
    box.innerText = playerx
    boardState[boxnum] = playerx
    checkWinner()
    currentturn = playero
  } 
  else 
  {
    box.innerText = playero
    boardState[boxnum] = playero
    checkWinner()
    currentturn = playerx
  }

}

function checkWinner() 
{
  for (let i = 0; i < 8; i++) 
  {
    let wincombo = wincombos[i]
    let box1 = boardState[wincombo[0]]
    let box2 = boardState[wincombo[1]]
    let box3 = boardState[wincombo[2]]

    if (box1 != null && box1 === box2 && box1 === box3)     
    {
      gamewon = true
      gamerun = false
      gameover()
    }
  }

  checkdraw()
}

function checkdraw()
{
    let draw = false
    for(i = 0; i < 10; i++)
{
        if(boardState[i] != null)
             draw = false
}
    draw = true
    gamerun = false
    gameover()
}

  function gameover()
  {
    if (gamewon = true) {
        winneris.innerText = "winner is " + currentturn
    }
    else if(draw = true)
        winneris.innerText = "Draw"
  }

function startNewGame() 
{
  boardState.fill(null)
  boxes.forEach((box) => (box.innerText = ""))
  currentturn = playerx;
  winneris.innerText = ""
  gamerun = true
}


function bgcolor()
{
    let bga = document.getElementById("kolorbga").value
    let bgb = document.getElementById("kolorbgb").value
    let bgc = document.getElementById("kolorbgc").value

    document.body.style.backgroundColor = 'rgb(' + bga + ',' + bgb + ',' + bgc + ')'
}

function plcolor()
{
    let pla = document.getElementById("kolorpla").value
    let plb = document.getElementById("kolorplb").value
    let plc = document.getElementById("kolorplc").value

    document.getElementById("box") = 'rgb(' + pla + ',' + plb + ',' + plc + ')'
}