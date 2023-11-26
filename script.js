"Use Strict";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const buttons = document.querySelectorAll("button");

const div = document.createElement("div");
const body = document.querySelector("body");

// Display the running score, and announce a winner of the game once one player reaches 5 points.
let playerScore = 0;
let computerScore = 0;
let result = "";

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let choice;
  if (randomNumber > 66) {
    choice = "rock";
  } else if (randomNumber < 33) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  //Order is rock, paper, scissors (alphabetically)
  if (playerSelection === computerSelection) {
    result = `It's a tie!

    Player Score: ${playerScore} 
    Computer Score: ${computerScore}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore += 1;

    result = `You won! Your ${capitalizeFirstLetter(
      playerSelection
    )} beats the computer's ${capitalizeFirstLetter(computerSelection)}
    
    Player Score: ${playerScore} 
    Computer Score: ${computerScore}`;

    if (playerScore == 5) {
      result = `You won the game! Refresh page to play again`;
      disableButtons();
    }
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore += 1;

    result = `You lose! The computer's ${capitalizeFirstLetter(
      computerSelection
    )} beats your ${capitalizeFirstLetter(playerSelection)}

    Player Score: ${playerScore} 
    Computer Score: ${computerScore}`;

    if (computerScore == 5) {
      result = `The computer won the game! Refresh page to play again.`;
      disableButtons();
    }
  }
  document.querySelector(".result").innerHTML = result;
  return;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

rock.addEventListener("click", () => {
  let message = playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  let message = playRound("scissors", getComputerChoice());
});

function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}
