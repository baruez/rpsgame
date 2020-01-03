var HumanScore = 0;
var ComputerScore = 0;
var numberOfRounds = 0;

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");

var computerRock = document.getElementById("computerRock");
var computerPaper = document.getElementById("computerPaper");
var computerScissor = document.getElementById("computerScissor");

function computerSelection(){

  var number = Math.round(Math.random()*2)
  if (number === 1){
    computerRock.classList.add("selected")
    return "Rock"
  }
  else if (number === 2){
    computerPaper.classList.add("selected")
    return "Paper"
  }
  else{
    computerScissor.classList.add("selected")
    return "Scissor"
  }

}



function playRound(playerSelection, computerSelection){
  let winner;
    if(playerSelection === "Rock" && computerSelection === "Rock")
      winner = "It's a tie"
    else if (playerSelection === "Rock" && computerSelection === "Paper"){
      winner = "Computer"
      computerPaper.classList.add("selectedWinner")
      rock.classList.add("selectedLoser")
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissor"){
      winner = "Player"
      rock.classList.add("selectedWinner")
      computerScissor.classList.add("selectedLoser")
    }
    else if (playerSelection === "Paper" && computerSelection === "Paper")
      winner = "It's a tie"
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
      winner = "Player"
      paper.classList.add("selectedWinner")
      computerRock.classList.add("selectedLoser")
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissor"){
      winner = "Computer"
      computerScissor.classList.add("selectedWinner")
      paper.classList.add("selectedLoser")
    }
    else if (playerSelection === "Scissor" && computerSelection === "Scissor")
      winner = "It's a tie"
    else if (playerSelection === "Scissor" && computerSelection === "Paper"){
      winner = "Player"
      scissor.classList.add("selectedWinner")
      computerPaper.classList.add("selectedLoser")
    }
    else if (playerSelection === "Scissor" && computerSelection === "Rock"){
      winner = "Computer"
      computerRock.classList.add("selectedWinner")
      scissor.classList.add("selectedLoser")
    }

    if (winner === "Player") {
        HumanScore++;
    } else if (winner === "Computer") {
        ComputerScore++;
    } else {
    }
    document.getElementById("humanResult").innerHTML = "Human Score: " +  HumanScore
    document.getElementById("computerResult").innerHTML = "Computer Score: " +  ComputerScore
    numberOfRounds++;

}

function statusReset(){
  computerRock.classList.remove("selected")
  computerPaper.classList.remove("selected")
  computerScissor.classList.remove("selected")
  rock.classList.remove("selected")
  paper.classList.remove("selected")
  scissor.classList.remove("selected")
  computerRock.classList.remove("selectedWinner")
  computerPaper.classList.remove("selectedWinner")
  computerScissor.classList.remove("selectedWinner")
  rock.classList.remove("selectedWinner")
  paper.classList.remove("selectedWinner")
  scissor.classList.remove("selectedWinner")
  computerRock.classList.remove("selectedLoser")
  computerPaper.classList.remove("selectedLoser")
  computerScissor.classList.remove("selectedLoser")
  rock.classList.remove("selectedLoser")
  paper.classList.remove("selectedLoser")
  scissor.classList.remove("selectedLoser")
}

function lastRound(){
  if (numberOfRounds === 5){
  let message;

  if(HumanScore > ComputerScore) {
      message = "Player Wins!"
  } else if (ComputerScore > HumanScore) {
      message = "Computer Wins!";
  } else {
      message = "It's a tie!"
  }

  alert("Final score Computer: " + ComputerScore + " Player: " + HumanScore + " --> " + message);
  HumanScore = 0;
  ComputerScore = 0;
  numberOfRounds = 0;
  document.getElementById("humanResult").innerHTML = "Human Score: " +  HumanScore;
  document.getElementById("computerResult").innerHTML = "Computer Score: " +  ComputerScore;

  }
}

function game() {

  rock.addEventListener("click", function(){
    statusReset()
    rock.classList.add("selected")
    playRound("Rock", computerSelection());
    setTimeout(lastRound, 300)
  })
  paper.addEventListener("click", function(){
    statusReset()
    paper.classList.add("selected")
    playRound("Paper", computerSelection());
    setTimeout(lastRound, 300)
  })
  scissor.addEventListener("click", function(){
    statusReset()
    scissor.classList.add("selected")
    playRound("Scissor", computerSelection());
    setTimeout(lastRound, 300)

  })



}

game();
