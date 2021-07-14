const game = () => {
  let pScore = 0;
  let cScore = 0;
  let round = 0;

  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".btn");

    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
        });
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score");
    const computerScore = document.querySelector(".computer-score");
    const rounds = document.querySelector(".round");
    playerScore.textContent = `Player: ${pScore}`;
    computerScore.textContent = `Computer: ${cScore}`;
    rounds.textContent = `Round ${round}`;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const outcome = document.querySelector(".outcome");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      outcome.textContent = "It is a tie";
      round++;
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        outcome.textContent = "Player Wins";
        pScore++;
        round++;
        updateScore();
        return;
      } else {
        outcome.textContent = "Computer Wins";
        cScore++;
        round++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        outcome.textContent = "Computer Wins";
        cScore++;
        round++;
        updateScore();
        return;
      } else {
        outcome.textContent = "Player Wins";
        pScore++;
        round++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        outcome.textContent = "Computer Wins";
        cScore++;
        round++;
        updateScore();
        return;
      } else {
        outcome.textContent = "Player Wins";
        pScore++;
        round++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  playMatch();
};

//start the game function
game();
