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
  let round = 0;
  const resultDiv = document.querySelector(".result");
  const finalResult = document.querySelector(".finalResult");

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
    const para = document.createElement("p");
    const roundResult = document.createElement("span");
    const spn = document.createElement("span");
    const img = document.createElement("img");
    const img2 = document.createElement("img");

    img2.src = `images/${humanChoice}.png`; // an emoji for humanChoice
    img.src = `images/${computerChoice}.png`; // an emoji for computerChoice
    spn.appendChild(img2);
    spn.appendChild(img);
    para.appendChild(spn);
    resultDiv.appendChild(para);

    if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      roundResult.textContent = `Rock beats Scissors - You won this round. Your Score = ${humanScore} and Computer Score = ${computerScore}`;
      para.appendChild(roundResult);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      roundResult.textContent = `Paper beats Rock - You won this round. Your Score = ${humanScore} and Computer Score = ${computerScore}`;
      para.appendChild(roundResult);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      roundResult.textContent = `Scissors beats Paper - You won this round. Your Score = ${humanScore} and Computer Score = ${computerScore}`;
      para.appendChild(roundResult);
    } else if (humanChoice === computerChoice) {
      roundResult.textContent = `Tie!  Your Score = ${humanScore} and Computer Score = ${computerScore}`;
      para.appendChild(roundResult);
    } else {
      computerScore++;
      roundResult.textContent = `${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice} - Computer won this round. Computer Score = ${computerScore} and Your Score = ${humanScore}`;
      para.appendChild(roundResult);
    }

    round++;

    if (round === 5) {
      let message = document.createElement("p");
      let resetBtn = document.createElement("button");
      finalResult.appendChild(message);
      finalResult.appendChild(resetBtn);

      if (humanScore > computerScore) {
        message.innerText = `YOU WON!`;
      } else if (computerScore > humanScore) {
        message.innerText = `COMPUTER WON!`;
      } else {
        message.innerText = `TIE!`;
      }

      resetBtn.innerHTML = "Restart";
      resetBtn.addEventListener("click", () => {
        location.reload();
      });
    }
  }
}

playGame();
