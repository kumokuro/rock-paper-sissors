const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  const player = document.querySelector(".player-score");
  player.textContent = `Player: ${playerScore}`;

  const computer = document.querySelector(".computer-score");
  computer.textContent = `Computer: ${computerScore}`;

  const outcome = document.querySelector(".outcome");
  outcome.textContent = "Make your decision!";

  // play a match //
  const playMatch = () => {
    const selections = document.querySelectorAll(".btn");

    // creating computer's selection //

    // creating an array of 3 choices
    const compSelections = ["rock", "paper", "scissors"];

    selections.forEach((selection) => {
      selection.addEventListener("click", function () {
        // picking a random number between 0 and 3
        const compNum = Math.floor(Math.random() * 3);

        // picking a random selection
        const compChoice = compSelections[compNum];

        const playerChoice = selection.id;

        // calling compareHands
        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(playerChoice, compChoice);
        });
      });
    });
  };

  // game logic //
  const compareHands = (playerChoice, compChoice) => {
    // tie
    if (playerChoice === compChoice) {
      outcome.textcontent = "It's a tie!";
      return;
    }

    // player chooses rock
    if (playerChoice === "rock") {
      if (compChoice === "scissors") {
        outcome.textcontent = "Player wins!";
        playerScore++;
        return;
      } else {
        outcome.textcontent = "Computer wins!";
        computerScore++;
        return;
      }
    }

    // player chooses paper
    if (playerChoice === "paper") {
      if (compChoice === "rock") {
        outcome.textcontent = "Player wins!";
        playerScore++;
        return;
      } else {
        outcome.textcontent = "Computer wins!";
        computerScore++;
        return;
      }
    }

    // player chooses scissors
    if (playerChoice === "scissors") {
      if (compChoice === "paper") {
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

  playMatch();
};

game();
