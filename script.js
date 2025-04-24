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

function getHumanChoice() {
  return prompt(
    "Please enter your choice: rock, paper, or scissors"
  ).toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice, counter) {
    console.log(`
        human choice: ${humanChoice},
        computer choice: ${computerChoice}
      `);

    if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log(
        `Round ${counter} result: You Win! Rock beats Scissors. Your Score = ${humanScore} and Computer Score = ${computerScore}.`
      );
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log(
        `Round ${counter} result: You Win! Paper beats Rock. Your Score = ${humanScore} and Computer Score = ${computerScore}.`
      );
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log(
        `Round ${counter} result: You Win! Scissors beats Paper. Your Score = ${humanScore} and Computer Score = ${computerScore}.`
      );
    } else if (humanChoice === computerChoice) {
      console.log(
        `Round ${counter} result: Tie!  Your Score = ${humanScore} and Computer Score = ${computerScore}.`
      );
    } else {
      computerScore++;
      console.log(
        `Round ${counter} result: Computer Win! ${computerChoice} beats ${humanChoice}. Computer's Score = ${computerScore} and Your Score = ${humanScore}.`
      );
    }
  }

  for (i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice, i);
  }

  if (humanScore > computerScore) {
    console.log(`

        *******  Total Result            Score  *******

                  YOU WIN!!!             ${humanScore}
      `);
  } else if (computerScore > humanScore) {
    console.log(`

      *******  Total Result              Score  *******

                COMPUTER WIN!!!          ${computerScore}
    `);
  } else {
    console.log(`

      *******  Total Result              Score *******

                TIE!                     ${humanScore} = ${computerScore}
    `);
  }
}

playGame();
