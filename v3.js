const game = () => {
  // variables //
  let playerScore = 0;
  let computerScore = 0;
  let playerChoice = "";
  let computerChoice = "";
  const buttons = document.querySelectorAll(".btn");

  const player = document.querySelector(".player-score");
  player.textContent = `Player: ${playerScore}`;

  const computer = document.querySelector(".computer-score");
  computer.textContent = `Computer: ${computerScore}`;

  const outcome = document.querySelector(".outcome");
  outcome.textContent = "Make your decision!";

  // assigning playerChoice to the corresponding button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerChoice = button.id;

      playGame(playerChoice, computerChoice);
    });
  });

  // creating randomly generated computer choice
  const computerSelector = () => {
    const selections = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    computerChoice = selections[randomNumber];
    return computerChoice;
  };

  // playing a round
  const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      outcome.textcontent = "It's a tie!";
      return;
    }
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        outcome.textcontent = "Player wins!";
        playerScore++;
        return;
      } else {
        outcome.textcontent = "Computer wins!";
        computerScore++;
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        outcome.textcontent = "Player wins!";
        playerScore++;
        return;
      } else {
        outcome.textcontent = "Computer wins!";
        computerScore++;
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        outcome.textcontent = "Player wins!";
        playerScore++;
        return;
      } else {
        outcome.textcontent = "Computer wins!";
        computerScore++;
        return;
      }
    }
  };

  const playGame = () => {
    outcome.textContent = "Choose Rock, Paper, or Scissors";
    playRound();
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5) {
      outcome.textContent = "You Won the Game! Congrats";
      playerScore = 0;
      computerScore = 0;
      player.textContent = `Player Score: ${playerScore}`;
      computer.textContent = `Computer Score: ${computerScore}`;
    } else if (computerScore == 5) {
      outcome.textContent =
        "You Lost the game:/ Maybe find something else to do?";
      playerScore = 0;
      computerScore = 0;
      player.textContent = `Player Score: ${playerScore}`;
      computer.textContent = `Computer Score: ${computerScore}`;
    }
  };

  playGame();
};

game();
