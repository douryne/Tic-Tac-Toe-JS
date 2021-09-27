let board = document.querySelector('table');

let cellArr = Array.from(document.querySelectorAll('td'));

let crossTurn = true;

board.addEventListener("mousedown", (e) => {
    if(!e.target.dataset.movedBy) {
        e.target.dataset.movedBy = (crossTurn) ? "cross" : "zero";
        crossTurn = !crossTurn;
        alertResult();
    }
})

function alertResult() {
    if(whoWon() == 0) alert("X winner!");
    else if(whoWon() == 1) alert("0 winner!");
    else if(whoWon() == 2) alert("Draw!");
    else return;

    cellArr.forEach(cell => delete cell.dataset.movedBy);
    crossTurn = true;
}

function whoWon() {
    let counter = cellArr.reduce((sum, cell) => {
        if(cell.dataset.movedBy !== undefined) sum += 1;
        return sum;
    }, 0)

    if(counter === cellArr.length) return 2;
}