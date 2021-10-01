const board = document.querySelector("table");
const cells = Array.from(document.querySelectorAll("td"));
let crossTurn = true;
const victories = {
    "X winner": 0,
    "0 winner": 0,

    increment: function(string) {
        this[string] += 1;
        return this[string];
    }
}

board.addEventListener("mousedown", ({ target }) => {
    if (target.dataset.player) return;

    target.dataset.player = crossTurn ? "cross" : "zero";
    crossTurn = !crossTurn;

    const winner = getWinner();
    if (!winner) return;

    alert(winner);
    resetGame();

    if(winner === "Tie") return;
    const victoryCounterElement = document.getElementById(winner);
    victoryCounterElement.textContent = victories.increment(winner);
})

function resetGame() {    
    cells.forEach(cell => delete cell.dataset.player);
    crossTurn = true;
}

function getWinner() {
    const winner = [getWinnerByDiagonals(), getWinnerByRows(), getWinnerByColumns()].find(winner => winner);
    if (winner) return winner === "cross" ? "X winner" : "0 winner";

    // Tie
    const cellsColored = cells.filter((cell) => cell.dataset.player);
    if (cellsColored.length === cells.length) return "Tie";
}

function getWinnerByColumns() {
    for (let x = 0; x < 3; x++) {
        const column = [cells[x], cells[x+3], cells[x+6]];
        const winner = getPlayerIfCellsAreEqual(column);
        if (winner) return winner;
    }
}

function getWinnerByRows() {
    for (let x = 0; x < 7; x += 3) {
        const row = [cells[x], cells[x+1], cells[x+2]];
        const winner = getPlayerIfCellsAreEqual(row);
        if (winner) return winner;
    }
}

function getWinnerByDiagonals() {
    const firstDiagonal = [cells[0], cells[4], cells[8]];
    const secondDiagonal = [cells[2], cells[4], cells[6]];

    const winner = [getPlayerIfCellsAreEqual(firstDiagonal), getPlayerIfCellsAreEqual(secondDiagonal)].find((winner) => winner);
    return winner;
}


function getPlayerIfCellsAreEqual(array) {
    const cellsAreEqual = array.every(cell => cell.dataset.player === array[0].dataset.player);
    if (cellsAreEqual) return array[0].dataset.player;
}
