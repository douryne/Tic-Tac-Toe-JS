let board = document.querySelector('table');

let crossTurn = true;

board.addEventListener("mousedown", (e) => {
    if(e.target.dataset.movedBy === undefined) {
        e.target.dataset.movedBy = (crossTurn) ? "cross" : "zero";
        crossTurn = !crossTurn;
    }
})