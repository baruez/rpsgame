var HumanScore = 0;
var ComputerScore = 0;

function computerSelection(){
  var number = Math.round(Math.random()*2)
  if (number === 1) return "Rock"
  else if (number === 2) return "Paper"
  else return "Scissor"
}


function playRound(playerSelection, computerSelection){
  let winner;
    if(playerSelection === "Rock" && computerSelection === "Rock")
      winner = "It's a tie"
    else if (playerSelection === "Rock" && computerSelection === "Paper")
      winner = "Player"
    else if (playerSelection === "Rock" && computerSelection === "Scissor")
      winner = "Computer"
    else if (playerSelection === "Paper" && computerSelection === "Paper")
      winner = "It's a tie"
    else if (playerSelection === "Paper" && computerSelection === "Rock")
      winner = "Player"
    else if (playerSelection === "Paper" && computerSelection === "Scissor")
      winner = "Computer"
    else if (playerSelection === "Scissor" && computerSelection === "Scissor")
      winner = "It's a tie"
    else if (playerSelection === "Scissor" && computerSelection === "Paper")
      winner = "Player"
    else if (playerSelection === "Scissor" && computerSelection === "Rock")
      winner = "Computer"
  return winner;

}



function game() {
  const buttons = document.querySelectorAll('.button');
    //MISING HOW TO ACTIVATE BUTTONS

      computerSelection = computerPlay();
      roundWinner = playRound(playerSelection, computerSelection);

      if (roundWinner == "Player") {
          HumanScore++;
      } else if (roundWinner == "Computer") {
          ComputerScore++;
      } else {
      }

      numberOfRounds++;


      if (numberOfRounds >= 5) {
          let message;

          if(playerWin > computerWin) {
              message = "Player Wins!"
          } else if (computerWin > playerWin) {
              message = "Computer Wins!";
          } else {
              message = "It's a tie!"
          }

          alert("Final score Computer: " + computerWin + " Player: " + playerWin + " --> " + message);
      }
      });
  });
}

game();
