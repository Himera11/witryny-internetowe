const boxes = document.querySelectorAll(".box")
const playerx = "X"
const playero = "O"
let currentturn = playerx
let gamerun = true
let gamewon = false
let tury = 0
var draw = false
let Xwin = 0
let Ywin = 0
licznik()

let boardState = Array(boxes.length)
boardState.fill(null)

const over = document.getElementById("over")
const winneris = document.getElementById("winner")

let wincombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]

boxes.forEach((box) => box.addEventListener("click", () => 
{
  let boxnum = box.dataset.id

  if (!gamerun) 
  {
    return
  }

  if (box.innerText != "") 
  {
    return
  }

  if (currentturn == 'X') 
  {
    box.innerText = playerx
    boardState[boxnum] = playerx
    tury++
    checkWinner()
    playerturn()  
  } 
  else 
  {
    box.innerText = playero
    boardState[boxnum] = playero
    tury++
    checkWinner()
    playerturn()
  }
}))

function playerturn()
{
  currentturn = currentturn === playerx ? playero : playerx
}

function checkWinner() 
{
  for (let i = 0; i < 8; i++) 
  {
    let wincombo = wincombos[i]
    let box1 = boardState[wincombo[0]]
    let box2 = boardState[wincombo[1]]
    let box3 = boardState[wincombo[2]]

    if (box1 != null && box1 === box2 && box2 === box3)     
    {
      gamewon = true
      gamerun = false
    }
  }
    gameover()
}


function gameover()
  {
    if (gamewon) {
        winneris.innerText = "winner is " + currentturn
        if(currentturn == 'X')
          Xwin++
        else
          Ywin++
        licznik()

    }
    else if(tury == 9)
        winneris.innerText = "Draw"
  }

  function licznik()
  {
      let licznik = document.getElementById("licznik").innerHTML = "wygrane X = " + Xwin + ", wygrane O = " + Ywin
  }

  function winreset()
  {
      Xwin = 0
      Ywin = 0
      licznik()
  }

function reset() 
{
  boardState.fill(null)
  boxes.forEach((box) => (box.innerText = ""))
  currentturn = playerx;
  winneris.innerText = ""
  gamerun = true
  gamewon = false
  tury = 0
}


function bgcolor()
{
    let bga = document.getElementById("kolorbga").value
    let bgb = document.getElementById("kolorbgb").value
    let bgc = document.getElementById("kolorbgc").value

    document.body.style.backgroundColor = 'rgb(' + bga + ',' + bgb + ',' + bgc + ')'
}