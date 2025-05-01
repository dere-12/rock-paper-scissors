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

// function getHumanChoice() {
//   return prompt(
//     "Please enter your choice: rock, paper, or scissors"
//   ).toLowerCase();
// }

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const rockBtn = document.querySelector(".rock");
  const paperBtn = document.querySelector(".paper");
  const scissorsBtn = document.querySelector(".scissors");

  rockBtn.addEventListener("click", () => {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });

  paperBtn.addEventListener("click", () => {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });

  scissorsBtn.addEventListener("click", () => {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });

  function playRound(humanChoice, computerChoice) {
    console.log(`
        human choice: ${humanChoice},
        computer choice: ${computerChoice}
      `);

    if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log(
        `Round ? result: You Won! Rock beats Scissors. Your Score = ${humanScore} and Computer Score = ${computerScore}.`
      );
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log(
        `Round ? result: You Won! Paper beats Rock. Your Score = ${humanScore} and Computer Score = ${computerScore}.`
      );
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log(
        `Round ? result: You Won! Scissors beats Paper. Your Score = ${humanScore} and Computer Score = ${computerScore}.`
      );
    } else if (humanChoice === computerChoice) {
      console.log(
        `Round ? result: Tie!  Your Score = ${humanScore} and Computer Score = ${computerScore}.`
      );
    } else {
      computerScore++;
      console.log(
        `Round ? result: Computer Won! ${computerChoice} beats ${humanChoice}. Computer's Score = ${computerScore} and Your Score = ${humanScore}.`
      );
    }
  }

  // for (i = 1; i <= 5; i++) {
  //   const humanChoice = getHumanChoice();
  //   const computerChoice = getComputerChoice();

  //   playRound(humanChoice, computerChoice, i);
  // }

  if (humanScore > computerScore) {
    console.log(`

        *******  Total Result            Score  *******

                  YOU Won!!!             ${humanScore}
      `);
  } else if (computerScore > humanScore) {
    console.log(`

      *******  Total Result              Score  *******

                COMPUTER Won!!!          ${computerScore}
    `);
  } else {
    console.log(`

      *******  Total Result              Score *******

                TIE!                     ${humanScore} = ${computerScore}
    `);
  }
}

playGame();
