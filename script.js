let board = document.querySelector('table');

let firstColor = "#ADD8E6";
let secondColor =  "#ff7";

let crossTurn = true;

board.addEventListener("click", function(e) {
    e.target.style.backgroundColor = (crossTurn) ? firstColor : secondColor;
    crossTurn = !crossTurn;
})
