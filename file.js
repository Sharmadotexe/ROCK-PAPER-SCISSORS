let computerScore = 0;
let playerScore = 0;


function mycomputerChoice () {

   let option = ["rock", "paper" , "scissors"];
   let index = Math.floor(Math.random()*3);

   return option[index];

}


function playerSelection () {
   let choice = prompt("rock, paper or scissors :") ;
   return choice;

}

game();


function game (){

   let playerchoice;

   for (let i =0; i<5 ; i++) {

       playerChoice =playerSelection();
       computerChoice= mycomputerChoice();
       rpc(playerChoice,computerChoice);
   }

   if (computerScore>playerScore){
       console.log("You've lost the round" );

   }
   else if(computerScore<playerScore) {
       console.log("You won the round");

   }
   else {
       console.log("This round has been tied");
   }
}




function scoreUpdate() {
   console.log(`Player- ${playerScore} \t Computer- ${computerScore}`);
}


function rpc (playerSelection,computerSelection) {
   
   playerSelection = playerSelection.toLowerCase();
   if(playerSelection==="rock" && computerSelection === "paper") {
       console.log(`You lost! ${computerSelection} beats ${playerSelection}!`);
       computerScore++;
       scoreUpdate();
   }

    else if(playerChoice==="paper" && computerChoice === "scissors") {
       console.log(`You lost! ${computerSelection} beats ${playerSelection}!`);
       computerScore++;
       scoreUpdate();
   } 

   else if(playerChoice==="scissors" && computerChoice === "rock") {
       console.log(`You lost! ${computerSelection} beats ${playerSelection}!`);
       computerScore++;
       scoreUpdate();
   }

       else if (playerSelection=== computerSelection) {
           console.log("its a draw");
       scoreUpdate();     
     }


     else{
       console.log(`you won ${playerSelection} beats ${computerSelection}`);
       playerScore++;
       scoreUpdate();
     }


}