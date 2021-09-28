const board = document.querySelector("table");
const cells = Array.from(document.querySelectorAll("td"));
let crossTurn = true;

board.addEventListener("mousedown", ({ target }) => {
    if(target.dataset.movedBy) return;

    target.dataset.movedBy = crossTurn ? "cross" : "zero";
    crossTurn = !crossTurn;

    alertResult();
})

function alertResult() {
    const winner = getWinner();
    if(!winner) return;
    alert(winner);
    resetGame();
}

function resetGame() {    
    cells.forEach(cell => delete cell.dataset.movedBy);
    crossTurn = true;
}

function getWinner() {
    // if(noWinner) return undefined;
    // if() return "X winner!";
    // if() return "0 winner!";
    const cellsColored = cells.filter((cell) => cell.dataset.movedBy);

    if(cellsColored.length === cells.length) return "Draw!";
}