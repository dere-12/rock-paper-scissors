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
  const resultDiv = document.querySelector(".result");

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

    const para = document.createElement("p");
    const roundResult = document.createElement("span");
    const spn = document.createElement("span");
    spn.textContent = ` You chose: ${humanChoice} and Computer chose: ${computerChoice}`;
    para.appendChild(spn);
    resultDiv.appendChild(para);

    if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      roundResult.textContent = `You Won!  Rock beats Scissors. Your Score = ${humanScore} and Computer Score = ${computerScore}`;
      para.appendChild(roundResult);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      roundResult.textContent = `You Won! Paper beats Rock. Your Score = ${humanScore} and Computer Score = ${computerScore}`;
      para.appendChild(roundResult);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      roundResult.textContent = `You Won! Scissors beats Paper. Your Score = ${humanScore} and Computer Score = ${computerScore}`;
      para.appendChild(roundResult);
    } else if (humanChoice === computerChoice) {
      roundResult.textContent = `Tie!  Your Score = ${humanScore} and Computer Score = ${computerScore}`;
      para.appendChild(roundResult);
    } else {
      computerScore++;
      roundResult.textContent = `Computer Won! ${computerChoice} beats ${humanChoice}. Computer's Score = ${computerScore} and Your Score = ${humanScore}`;
      para.appendChild(roundResult);
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
