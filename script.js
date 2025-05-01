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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const btns = document.querySelector(".buttons-container");
  btns.addEventListener("click", (event) => {
    const computerChoice = getComputerChoice();
    let humanChoice;

    switch (event.target.id) {
      case "rock":
        humanChoice = "rock";
        playRound(humanChoice, computerChoice);
        break;
      case "paper":
        humanChoice = "paper";
        playRound(humanChoice, computerChoice);
        break;
      case "scissors":
        humanChoice = "scissors";
        playRound(humanChoice, computerChoice);
        break;
    }
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
