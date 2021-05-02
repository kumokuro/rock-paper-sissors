
    let randomNum = Math.round(Math.random() * (2));

    // the computer's turn 
    function computerPlay() {
      if (randomNum === 0) {
        return "rock";
      }
      else if (randomNum === 1) {
        return "paper";
      }
      else if (randomNum === 2) {
        return "scissors";
      }
    }

    // variables
    let computerChoice = computerPlay();
    let playerChoice = prompt("Choose one: Rock, paper, or scissors?"); 
    let playerWins = 0;
    let computerWins = 0;
    let round = 1;

    // one game of rock, paper, sissors 
    function playRound(playerChoice, computerChoice) {
        if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
            round++;
            return "It's a tie!";
        }
        else if (playerChoice === "rock" && computerChoice === "scissors") {
            playerWins++, round++;
            return "Rock beats scissors! Player wins!";
        }
        else if (playerChoice === "paper" && computerChoice === "scissors") {
            computerWins++, round++;
            return "Scissors beats paper! Computer wins!";
        }
        else if (playerChoice === "scissors" && computerChoice === "rock") {
            computerWins++, round++;
            return "Rock beats scissors! Computer wins!";
        }
        else if (playerChoice === "rock" && computerChoice === "paper") {
            computerWins++, round++;
            return "Paper beats rock! Computer wins!";
        }
        else if (playerChoice === "paper" && computerChoice === "rock") {
            computerWins++, round++;
            return "Rock beats paper! Computer wins!";
        }
        else if (playerChoice === "scissors" && computerChoice === "paper") {
            playerWins++, round++;
            return "Scissors beats paper! Player wins!";
        }
    }

    // 5 round game 
    function game(playerChoice, computerChoice) {
            // scoreboard
            let message = `Round ${round}. SCORE [Player: ${playerWins}] [Computer: ${computerWins}]`;

            // game 
            console.log(message);
            console.log(playRound(playerChoice, computerChoice));
    }

    console.log(game(playerChoice, computerChoice));
    console.log(game(playerChoice, computerChoice));
    console.log(game(playerChoice, computerChoice));
    console.log(game(playerChoice, computerChoice));
    console.log(game(playerChoice, computerChoice));