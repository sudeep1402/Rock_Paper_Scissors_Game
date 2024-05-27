const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (playerScore < maxScore && computerScore < maxScore) {
      const result = playRound(button.id, computerPlay());
      resultEl.textContent = result;
      
      if (playerScore === maxScore) {
        resultEl.textContent = "Congratulations! You won the game!";
        disableButtons();
      } else if (computerScore === maxScore) {
        resultEl.textContent = "Game over! The computer won the game.";
        disableButtons();
      }
    }
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}
