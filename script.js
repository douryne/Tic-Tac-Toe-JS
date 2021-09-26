let board = document.querySelector('table');
let cellObj = document.querySelectorAll('td')

let firstColor = "rgb(173, 216, 230)";
let secondColor =  "rgb(255, 255, 119)";

let crossTurn = true;

board.addEventListener("mousedown", function(e) {
    if(e.target.style.backgroundColor === '') {
        e.target.style.backgroundColor = (crossTurn) ? firstColor : secondColor;
        crossTurn = !crossTurn;
        alertResultAndRestartGame();
    }
})

function alertResultAndRestartGame() {

    if(isOver() == 0) alert("Cross won!");
    else if(isOver() == 1) alert("Zero won!");
    else if(isOver() == 2) alert("Draw!");
    else return;

    cellObj.forEach(cell => cell.style.backgroundColor = '');
    crossTurn = true;

}

function isOver() {

    for(let cell = 0; cell < 3; cell++) {
        if(cellObj[cell].style.backgroundColor === cellObj[cell+3].style.backgroundColor
            && cellObj[cell].style.backgroundColor === cellObj[cell+6].style.backgroundColor
            && cellObj[cell].style.backgroundColor !== '') {
                return (cellObj[cell].style.backgroundColor === firstColor) ? 0 : 1;
            }
    }
    
    for(let cell = 0; cell < 7; cell+=3) {
        if(cellObj[cell].style.backgroundColor === cellObj[cell+1].style.backgroundColor
            && cellObj[cell].style.backgroundColor === cellObj[cell+2].style.backgroundColor
            && cellObj[cell].style.backgroundColor !== '') {
                return (cellObj[cell].style.backgroundColor === firstColor) ? 0 : 1;
            }
    }

    if(cellObj[0].style.backgroundColor === cellObj[4].style.backgroundColor
        && cellObj[0].style.backgroundColor === cellObj[8].style.backgroundColor
        && cellObj[0].style.backgroundColor !== '') {
            return (cellObj[0].style.backgroundColor === firstColor) ? 0 : 1;
        }
    else if(cellObj[2].style.backgroundColor === cellObj[4].style.backgroundColor
            && cellObj[2].style.backgroundColor === cellObj[6].style.backgroundColor
            && cellObj[2].style.backgroundColor !== '') {
                return (cellObj[2].style.backgroundColor === firstColor) ? 0 : 1;
        }


    let counter = 0;

    cellObj.forEach(cell => {
        if(cell.style.backgroundColor !== '') counter++;
    })

    if(counter === cellObj.length) return 2;


}

