//variables
      //let playerChoice = ;
      //let result = ;
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

    // One game of rock, paper, sissors 
    //function playRound() {

    //}