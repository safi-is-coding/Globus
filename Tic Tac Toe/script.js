let cells = document.querySelectorAll('.cell')
const statusText = document.querySelector('#statusText')
const restartBtn = document.querySelector('#restartBtn')

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let options = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
let running = false
// converting nodeList to array and storing in another varaible
const cellsdata = Array.from(cells)

initializeGame()



function initializeGame(){
    // we can use this map if the cell is an array 
    cellsdata.map((cell)=> cell.addEventListener('click', cellClicked))

    // we can use this forEach if the cell is a nodeList 
    // cells.forEach(cell => cell.addEventListener('click', cellClicked)); 
    restartBtn.addEventListener('click', restartGame);
    statusText.innerText = `${currentPlayer}'s turn`
    console.log(`${currentPlayer}'s turn`);
    running = true
}

function cellClicked(){
    const cellIndex = this.getAttribute('cellIndex')

    if (options[cellIndex] !== '' || !running) {
        return
    }

    updateCell(this, cellIndex)
    checkWinner()

}


function updateCell(cell, index){
    options[index] = currentPlayer
    cell.innerText = currentPlayer
}

function changePlayer(){
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'
    statusText.innerText = `${currentPlayer}'s turn`
}

function checkWinner(){
    let roundWon = false

    for(let i=0; i<winConditions.length; i++){
        const condition = winConditions[i]
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]

        if(cellA === '' || cellB === '' || cellC === '') { continue }

        if(cellA == cellB && cellB == cellC){
            roundWon = true
            break
        }

    }
        if(roundWon){
            statusText.innerText = `${currentPlayer} wins!`
            running = false
        }
        else if(!options.includes('')){
            statusText.innerText = 'Draw!'
            running = false
        }
        else{
            changePlayer()
        }
}

function restartGame(){
    currentPlayer = 'X'
    options = ['', '', '', '', '', '', '', '', '']
    statusText.innerText = `${currentPlayer}'s turn`
    cellsdata.map((cell) => cell.innerText = "")
    running = true
}


