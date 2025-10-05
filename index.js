// ROCK-PAPER -SCISSORS

const choices=["rock","paper","scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const scoreBoard=document.getElementById("scoreBoard");
const reset=document.getElementById("reset");
const startBtn=document.getElementById("startBtn");


let player=0;
let computer=0;
let tie=0;
let gameStarted = false;
startBtn.addEventListener("click", () => {
    
    if (!gameStarted) {
        gameStarted = true;
        startBtn.textContent = "RESTART"; 
      } else {
        gameStarted = false;
        startBtn.textContent = "START"; 
      }
      resetScore();
      reset.style.display="none";
    });
function playGame(playerChoice){
   if (!gameStarted) return;
   const computerChoice=choices[Math.floor(Math.random()*3)] ;
   let result="";

   if(playerChoice === computerChoice){
    result="IT'S A TIE!";
    tie++;
   }
   else{
          if(playerChoice==="rock" && computerChoice==="scissors" ){
             result="YOU WIN!";
             player++;
          }
          else if( playerChoice==="paper" && computerChoice==="rock" )
           {
                  result="YOU WIN!";
                   player++;
           }
           else if( playerChoice==="scissors" && computerChoice==="paper" )
           {
                  result="YOU WIN!";
                   player++;
           }
           else{
                   result="YOU LOSS!";
                    computer++;
           }
   }

  
   playerDisplay.textContent=`PLAYER: ${playerChoice}`;
   computerDisplay.textContent=`COMPUTER: ${computerChoice}`;
   resultDisplay.textContent=result;
   scoreBoard.textContent=`Score → Player: ${player} | Computer: ${computer} | Ties:  ${tie}`
}

function resetScore(){
   player=0;
   computer=0;
   tie=0;
    playerDisplay.textContent=`PLAYER: `;
   computerDisplay.textContent=`COMPUTER: `;
   resultDisplay.textContent="";
    scoreBoard.textContent=`Score → Player:0 | Computer: 0 | Ties: 0`;
}