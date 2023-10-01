function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  let choice;
  if (random == 0) choice = "rock";
  if (random == 1) choice = "paper";
  if (random == 2) choice = "scissors";
  return choice;
}

function getPlayerSelection(prefix = "Game: ") {
  return prompt(prefix + "Rock Paper Scissors?");
}

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

function logResult(result, playerSelection, computerSelection) {
  if (result == "win")
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
  else if (result == "lose")
    console.log(`You lose! ${playerSelection} loses to ${computerSelection}.`);
  else if (result == "tie")
    console.log(`It's a tie! ${playerSelection} equals ${computerSelection}.`);
}

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
