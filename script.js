let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3) + 1;

  if (randNum === 1) {
    return "rock";
  } else if (randNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// console.log(getComputerChoice());

function getHumanChoice() {
  // let humanChoice = prompt("Choose from rock, paper, or scissors");

  return prompt("Choose from rock, paper, or scissors");
}

// console.log(getHumanChoice());

const humanChoice = getHumanChoice().toLocaleLowerCase();
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  console.log(`
      human choice: ${humanChoice},
      computer choice: ${computerChoice}
    `);

  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You Win! Rock beats Scissors. Score = " + humanScore);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You Win! Paper beats Rock. Score = " + humanScore);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("You Win! Scissors beats Paper. Score = " + humanScore);
  } else if (humanChoice === computerChoice) {
    console.log("Tie! Refresh the page to restart the game.");
  } else {
    computerScore++;
    console.log(
      `Computer Win! ${computerChoice} beats ${humanChoice}. Score = ${computerScore}`
    );
  }
}

playRound(humanChoice, computerChoice);
