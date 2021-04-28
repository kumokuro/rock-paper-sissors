
    let randomNum = Math.round(Math.random() * (2));

    // The computer's turn 
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

    let computerChoice = computerPlay();
    let playerChoice = prompt("Choose one: Rock, paper, or scissors?");

    // One game of rock, paper, sissors 
    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        }
        else if (playerChoice === "rock" && computerChoice === "scissors") {
            return "Player wins!";
        }
        else if (playerChoice === "paper" && computerChoice === "scissors") {
            return "Computer wins!";
        }
        else if (playerChoice === "scissors" && computerChoice === "rock") {
            return "Computer wins!";
        }
        else if (playerChoice === "rock" && computerChoice === "paper") {
            return "Computer wins!";
        }
        else if (playerChoice === "paper" && computerChoice === "rock") {
            return "Computer wins!";
        }
        else if (playerChoice === "scissors" && computerChoice === "paper") {
            return "Player wins!";
        }
    }
    console.log(playRound(playerChoice, computerChoice));