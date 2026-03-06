//your JS code here. If required.
let player1 = "";
let player2 = "";
let currentPlayer = "X";

let boardState = ["","","","","","","","",""];

const submitBtn = document.getElementById("submit");
const message = document.querySelector(".message");
const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");

submitBtn.addEventListener("click", function(){

    player1 = document.getElementById("player-1").value;
    player2 = document.getElementById("player-2").value;

    if(player1 === "" || player2 === "") return;

    document.getElementById("input-section").style.display = "none";
    board.style.display = "grid";

    message.textContent = player1 + ", you're up";
});

cells.forEach(cell => {

    cell.addEventListener("click", function(){

        const id = cell.id - 1;

        if(boardState[id] !== "") return;

        boardState[id] = currentPlayer;

        cell.textContent = currentPlayer;

        if(checkWinner()){
            let winner = currentPlayer === "X" ? player1 : player2;
            message.textContent = winner + ", congratulations you won!";
            return;
        }

        if(currentPlayer === "X"){
            currentPlayer = "O";
            message.textContent = player2 + ", you're up";
        }else{
            currentPlayer = "X";
            message.textContent = player1 + ", you're up";
        }

    });

});

function checkWinner(){

    const winPatterns = [

        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]

    ];

    for(let pattern of winPatterns){

        const [a,b,c] = pattern;

        if(
            boardState[a] &&
            boardState[a] === boardState[b] &&
            boardState[a] === boardState[c]
        ){
            return true;
        }
    }

    return false;
}