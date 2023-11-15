"use strict";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const div = document.createElement("div");
const body = document.querySelector("body");

rock.addEventListener("click", () => {
  let message = playRound("rock", getComputerChoice());
  div.textContent = message;
  body.appendChild(div);
});

paper.addEventListener("click", () => {
  let message = playRound("paper", getComputerChoice());
  div.textContent = message;
  body.appendChild(div);
});

scissors.addEventListener("click", () => {
  let message = playRound("scissors", getComputerChoice());
  div.textContent = message;
  body.appendChild(div);
});

// Display the running score, and announce a winner of the game once one player reaches 5 points.
let playerScore = 0;
let computerScore = 0;

do {} while (playerScore < 5 && computerScore > 5);

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
    return `It's a tie!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You won! Your ${capitalizeFirstLetter(
      playerSelection
    )} beats the computer's ${capitalizeFirstLetter(computerSelection)}`;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    return `You lose! The computer's ${capitalizeFirstLetter(
      computerSelection
    )} beats your ${capitalizeFirstLetter(playerSelection)}`;
  } else {
    return `Please enter rock, paper or scissors`;
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/*

Old functionality: play 5 rounds w/o a UI

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
*/
