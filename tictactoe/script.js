document.addEventListener("DOMContentLoaded", function () {

    class TicTacToe {
        constructor() {
            this.td = document.getElementsByTagName('td');
            this.h2 = document.getElementsByTagName("h2")[0];
            this.button = document.getElementById("reset");
            this.turnsCount = 0;
            this.wins = [
                ["0", "1", "2"], //[0][0] [0][1] [0][2]
                ["3", "4", "5"], //[1][0] [1][1] [1][2]
                ["6", "7", "8"],
                ["0", "3", "6"],
                ["1", "4", "7"],
                ["2", "5", "8"],
                ["0", "4", "8"],
                ["2", "4", "6"]
            ];
            this.player = true;
        }

        hasWon(xoro) {
            let board = document.getElementsByClassName(xoro);
            let arrXO = [];
            for (let i = 0; i < board.length; i++) {
                arrXO.push(board[i].getAttribute("data-num"));
            }
    
            for (let i = 0; i < this.wins.length; i++) {
                if (arrXO.includes(this.wins[i][0]) && arrXO.includes(this.wins[i][1]) && arrXO.includes(this.wins[i][2])) {
                    console.log("winner");
                    alert(`Winner is ${xoro}`);
                    this.reset();
                }
            }
            if (this.turnsCount === 9) {
                alert("draw");
                this.reset();
            }
        }

        input() {
            for (let i = 0; i < 9; i++) {
                this.td[i].addEventListener('click', event => {
                    console.log(this.h2);
                    
                    if (event.target.innerText != "") {
                        return;
                    }
                    if (this.player == true) {
                        event.target.innerText = "X";
                        event.target.setAttribute("class", "X");
                        this.turnsCount++;
                        setTimeout(e => { this.hasWon("X") }, 10);
                        this.h2.innerText = "It is O's turn";
                        this.player = false;
                        console.log(this.turnsCount);
                    }
                    else {
                        event.target.innerText = "O";
                        event.target.setAttribute("class", "O");
                        this.turnsCount++;
                        setTimeout(e => { this.hasWon("O") }, 10);
                        this.h2.innerText = "It is X's turn";
                        this.player = true;
                        console.log(this.turnsCount);
                    }
                })
            }
        }

        newGame() {
            this.button.addEventListener('click', e => {
                this.reset();
            })
        }

        reset() {
            for (let i = 0; i < 9; i++) {
                this.td[i].innerHTML = '';
                this.td[i].setAttribute("class", "");
            }
            this.turnsCount = 0;
        }        
    }

    let tic = new TicTacToe();
    tic.input();
    tic.newGame();
});//end of domcontentloaded