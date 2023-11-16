// -------------this file contains logix for game-----------------


//-----------------set different status for tiles of min----------------------------
export const TILE_STATUSES = {
    HIDDEN: "hidden",
    MINE: "mine",
    NUMBER: "number",
    MARKED: "marked",
  }
  


//   ---------------------------finction to create mine board---------------------------------
  export function createBoard(boardSize, numberOfMines) {
    const board = []

    //------------------------gettting postion of mines on mine board----------------------------------
    const minePositions = getMinePositions(boardSize, numberOfMines) 
  
    // ------------------adding all tiels with idden status initially--------------------------------
    for (let x = 0; x < boardSize; x++) {
      const row = []
      for (let y = 0; y < boardSize; y++) {
        const element = document.createElement("div")
        element.dataset.status = TILE_STATUSES.HIDDEN
  
        const tile = {
          element,
          x,
          y,
          mine: minePositions.some(positionMatch.bind(null, { x, y })),
          get status() {
            return this.element.dataset.status
          },
          set status(value) {
            this.element.dataset.status = value
          },
        }
        //-------------pushing each tile in a row---------------------------------
        row.push(tile)
      }

      //-----------------pushing each row on board--------------------------
      board.push(row)
    }
  
    return board
  }
  
//   --------------------this function mark tile for mine -------------------
 
  export function markTile(tile) {
    if (
      tile.status !== TILE_STATUSES.HIDDEN &&
      tile.status !== TILE_STATUSES.MARKED
    ) {
      return
    }
  
    if (tile.status === TILE_STATUSES.MARKED) {
      tile.status = TILE_STATUSES.HIDDEN
    } else {
      tile.status = TILE_STATUSES.MARKED
    }
  }
  

//   ------------------function to  open tile -------------------------------
  export function revealTile(board, tile) {
    if (tile.status !== TILE_STATUSES.HIDDEN) {
      return
    }
  
    if (tile.mine) {
        
      tile.status = TILE_STATUSES.MINE
      
      return
    }
  
    tile.status = TILE_STATUSES.NUMBER
    const adjacentTiles = nearbyTiles(board, tile)
    const mines = adjacentTiles.filter(t => t.mine)
    if (mines.length === 0) {
      adjacentTiles.forEach(revealTile.bind(null, board))
    } else {
      tile.element.textContent = mines.length
    }
  }
  

//   ---------------function to check winning condition--------------------
  export function checkWin(board) {
    return board.every(row => {
      return row.every(tile => {
        return (
          tile.status === TILE_STATUSES.NUMBER ||
          (tile.mine &&
            (tile.status === TILE_STATUSES.HIDDEN ||
              tile.status === TILE_STATUSES.MARKED))
        )
      })
    })
  }
  
//   ------------if mine status is equal to mine then we lose--------------------
  export function checkLose(board) {
    return board.some(row => {
      return row.some(tile => {
        return tile.status === TILE_STATUSES.MINE;

      })
    })
  }

//   ------------------function to get min positions---------------------
  
  function getMinePositions(boardSize, numberOfMines) {
    const positions = []
  
    while (positions.length < numberOfMines) {
      const position = {
        x: randomNumber(boardSize),
        y: randomNumber(boardSize),
      }
  
      if (!positions.some(positionMatch.bind(null, position))) {
        positions.push(position)
      }
    }
  
    return positions
  }
  

//   -------------function to check if if tile is alraedy marked or not---------------------------
  function positionMatch(a, b) {
    return a.x === b.x && a.y === b.y
  }
  
//   ----------------function to generate new random mine position tile------------
  function randomNumber(size) {
    return Math.floor(Math.random() * size)
  }
  


//   -------------------function to find tiles arround it------------------------
  function nearbyTiles(board, { x, y }) {
    const tiles = []
  
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      for (let yOffset = -1; yOffset <= 1; yOffset++) {
        const tile = board[x + xOffset]?.[y + yOffset]
        if (tile) tiles.push(tile)
      }
    }
  
    return tiles
  }