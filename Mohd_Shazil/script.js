// -----------------importing required function for min game from minsweeper js-----------------
import {
   TILE_STATUSES,
   createBoard,
   markTile,
   revealTile,
   checkWin,
   checkLose,
 } from "./minsweeper.js"
 

 //--------------------board size and number of mines----------------------------
 const BOARD_SIZE = 10
 const NUMBER_OF_MINES = 10;
 
 const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
 const boardElement = document.querySelector(".board")
 const minesLeftText = document.querySelector("[data-mine-count]")
 const messageText = document.querySelector(".subtext")
 
 board.forEach(row => {
   row.forEach(tile => {
     boardElement.append(tile.element)
     //---------------------on click opening a tile---------------------------------
     tile.element.addEventListener("click", () => {
       revealTile(board, tile)
       checkGameEnd()
     })
     tile.element.addEventListener("contextmenu", e => {
       e.preventDefault()
       markTile(tile)
       listMinesLeft()
     })
   })
 })

 //---------------------------to create  mines grid in css -------------------------------
 boardElement.style.setProperty("--size", BOARD_SIZE)
 //----------------to display number of mines on ui------------------------
 minesLeftText.textContent = NUMBER_OF_MINES
 

 //----------------------function to calcultate number of mines------------------------------
 function listMinesLeft() {
   const markedTilesCount = board.reduce((count, row) => {
     return (
       count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
     )
   }, 0)
 
 
   minesLeftText.textContent = NUMBER_OF_MINES - markedTilesCount
 
 }

 //---------------------function to to check if game end or not-------------------------
 
 function checkGameEnd() {
   const win = checkWin(board)
   const lose = checkLose(board)
 
   if (win || lose) {
     boardElement.addEventListener("click", stopProp, { capture: true })
     boardElement.addEventListener("contextmenu", stopProp, { capture: true })
   }
 
   if (win) {
     messageText.textContent = "You Win";
     let winSound=new Audio("./win.wav");
     winSound.play()
   }
   else if (lose) {
     messageText.textContent = "You Lose";
     let loseSound=new Audio("./lose.wav");
     loseSound.play()
     board.forEach(row => {
       row.forEach(tile => {
         if (tile.status === TILE_STATUSES.MARKED) markTile(tile)
         if (tile.mine) revealTile(board, tile)
       })
     })
   }else{
      let clickSound=new Audio("./click.wav");
      clickSound.play()
   }

  
 }
 
//  ------------------stop futher activities if game ends--------------------
 function stopProp(e) {
   e.stopImmediatePropagation()
 }