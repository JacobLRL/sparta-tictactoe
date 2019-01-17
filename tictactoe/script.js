document.addEventListener("DOMContentLoaded", function () {

    let td = document.getElementsByTagName('td');
    let h2 = document.getElementsByTagName("h2");
    let button = document.getElementById("reset");
    let turnsCount = 0;
    const wins = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["0", "4", "8"],
        ["2", "4", "6"]
    ];
    let player = true;

    function input(td) {
        for (let i = 0; i < 9; i++) {
            td[i].addEventListener('click', function (event) {
                if (event.target.innerText != "") {
                    return;
                }
                else if (player == true) {
                    event.target.innerText = "X";
                    event.target.setAttribute("class", "X");
                    turnsCount++;
                    setTimeout(function() {hasWon("X")}, 10);
                    h2[0].innerText = "It is O's turn";
                    player = false;
                    console.log(turnsCount);
                }
                else {
                    event.target.innerText = "O";
                    event.target.setAttribute("class", "O");
                    turnsCount++;
                    setTimeout(function() {hasWon("O")}, 10);
                    h2[0].innerText = "It is X's turn";
                    player = true;
                    console.log(turnsCount);
                }
            })
        }
    }

    function newGame() {
        button.addEventListener('click', function () {
            reset();
        })
    }

    function reset() {
        for (let i = 0; i < 9; i++) {
            td[i].innerHTML = '';
            td[i].setAttribute("class", "");
        }
        turnsCount = 0;
    }

    function hasWon(xoro) {
        let board = document.getElementsByClassName(xoro);
        let arrXO = [];
        for (let i = 0; i < board.length; i++) {
            arrXO.push(board[i].getAttribute("data-num"));
        }

        for (let i = 0; i < wins.length; i++) {
            if (arrXO.includes(wins[i][0]) && arrXO.includes(wins[i][1]) && arrXO.includes(wins[i][2])) {
                console.log("winner");
                alert(`Winner is ${xoro}`);
                reset();
            }
        }
        if(turnsCount === 9){
            alert("draw");
            reset();
        }
    }

    input(td);
    newGame();


    // console.log(`the content is ${input(td.innerText)}`);
    // if (td[1].innerText === "X") {
    //     alert("X Wins");
    //     console.log('test');

    // }
});//end of domcontentloaded