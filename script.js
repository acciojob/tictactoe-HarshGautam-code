
let player1 = "";
let player2 = "";
let current = "X";

let board = ["","","","","","","","",""];

const submit = document.getElementById("submit");
const boardDiv = document.getElementById("board");
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

submit.addEventListener("click", function(){

player1 = document.getElementById("player-1").value;
player2 = document.getElementById("player-2").value;

if(player1 === "" || player2 === "") return;

document.getElementById("input-section").style.display = "none";
boardDiv.style.display = "grid";

message.textContent = player1 + ", you're up";

});

cells.forEach(cell => {

cell.addEventListener("click", function(){

let index = cell.id - 1;

if(board[index] !== "") return;

board[index] = current;
cell.textContent = current;

let winPattern = checkWinner();

if(winPattern){

let winner = current === "X" ? player1 : player2;

message.textContent = winner + ", congratulations you won!";

/* 🎯 TURN WINNING CELLS PURPLE */

winPattern.forEach(i => {
cells[i].style.background = "#8a008a";
cells[i].style.color = "white";
});

return;
}

current = current === "X" ? "O" : "X";

message.textContent = (current === "X" ? player1 : player2) + ", you're up";

});

});


function checkWinner(){

const patterns = [

[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]

];

for(let p of patterns){

let [a,b,c] = p;

if(board[a] && board[a] === board[b] && board[a] === board[c]){

return p;

}

}

return null;
}