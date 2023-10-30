"use strict";

// input rock paper scissors

// compare user input to computer input
// display message indicating success, or Tie

// randomly assign one to a computer input
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
  let message;
  if (playerSelection === computerSelection) {
    return (message = `It's a tie!`);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return (message = `You won! ${playerSelection} beats ${computerSelection}`);
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    return (message = `You lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    return `Please enter rock, paper or scissors`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(`Guess?`);
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }

  // if (playerScore > computerScore) {
  //   return `You won the game!`;
  // } else if (computerScore > playerScore) {
  //   return `You lost the game!`;
  // } else {
  //   return `The game is a tie!`;
  // }
}

game();
