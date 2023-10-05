function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  let choice;
  if (random == 0) choice = "rock";
  if (random == 1) choice = "paper";
  if (random == 2) choice = "scissors";
  return choice;
}

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

/*
function getPlayerSelection(prefix = "Game: ") {
  return prompt(prefix + "Rock Paper Scissors?");
} */

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (
    playerSelection != "rock" &&
    playerSelection != "paper" &&
    playerSelection != "scissors"
  ) {
    return "Invalid input.";
  }

  if (playerSelection == computerSelection) {
    logResult("tie", playerSelection, computerSelection);
    return "tie";
  }
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    logResult("win", playerSelection, computerSelection);
    return "win";
  } else {
    logResult("lose", playerSelection, computerSelection);
    return "lose";
  }
}

let pointsPlayer = 0;
let pointsComputer = 0;
const pointsPlayerDisplay = document.querySelector("#pointsPlayerDisplay");
const pointsComputerDisplay = document.querySelector("#pointsComputerDisplay");
const resultText = document.querySelector(".result-text");

function logResult(result, playerSelection, computerSelection) {
  if (result == "win") {
    resultText.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    pointsPlayerDisplay.textContent = ++pointsPlayer;
  } else if (result == "lose") {
    resultText.textContent = `You lose! ${playerSelection} loses to ${computerSelection}.`;
    pointsComputerDisplay.textContent = ++pointsComputer;
  } else if (result == "tie") {
    resultText.textContent = `It's a tie! ${playerSelection} equals ${computerSelection}.`;
  }

  checkFinal(pointsPlayer, pointsComputer);
}

function checkFinal(pointsPlayer, pointsComputer) {
  if (pointsPlayer == 5) {
    resultText.style.cssText = "background:green; font-weight:900;";
    resultText.textContent = "Congrats, you win!";
    setTimeout(() => {
      gameReset();
    }, 3000);
  }
  if (pointsComputer == 5) {
    resultText.style.cssText = "background:red; font-weight:900;";

    resultText.textContent = "Damnit, the machine wins.";
    setTimeout(() => {
      gameReset();
    }, 3000);
  }
}
function gameReset() {
  pointsPlayer = 0;
  pointsComputer = 0;
  resultText.style.cssText = "";

  resultText.textContent = "New round!";
  pointsPlayerDisplay.textContent = "0";
  pointsComputerDisplay.textContent = "0";
}

/*
function game(rounds) {
  let pointsPlayer = 0;
  let pointsComputer = 0;

  for (let i = 1; i <= rounds; i++) {
    result = playRound(getPlayerSelection(`Round ${i}: `), getComputerChoice());
    if (result == "win") pointsPlayer++;
    if (result == "lose") pointsComputer++;
  }

  if (pointsPlayer > pointsComputer)
    console.log(`You win! It's a clear ${pointsPlayer} - ${pointsComputer}.`);
  else if (pointsPlayer < pointsComputer)
    console.log(
      `You lose! The machine beat you ${pointsPlayer} - ${pointsComputer}.`
    );
  else if (pointsPlayer == pointsComputer)
    console.log(`It's a tie! ${pointsPlayer} - ${pointsComputer}.`);
}

game(5);
*/
