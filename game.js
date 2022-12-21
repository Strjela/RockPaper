function getComputerChoice() {

    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

// console.log(getComputerChoice());

function playRand (playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();


    if (playerSelection === computerSelection){
        return "It's a tie!"
    } else if ( playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'You win, Rock beats Scissors';
        } else {
        return 'You lose, Paper beats Rock'}
    }
    else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return "You win! Paper beats Rock";
    } else {
      return "You lose! Scissors beats Paper";
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      return "You win! Scissors beats Paper";
    } else {
      return "You lose! Rock beats Scissors";
    }
  } else {
    return "Invalid input. Please enter 'Rock', 'Paper', or 'Scissors'.";
  }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
      const computerSelection = getComputerChoice();
  
      const result = playRand(playerSelection, computerSelection);
      console.log(result);
  
      if (result.startsWith("You win")) {
        playerScore++;
      } else if (result.startsWith("You lose")) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log(`You win the game! Score: ${playerScore}-${computerScore}`);
    } else if (playerScore < computerScore) {
      console.log(`You lose the game! Score: ${playerScore}-${computerScore}`);
    } else {
      console.log(`It's a tie! Score: ${playerScore}-${computerScore}`);
    }
  }
  
  game();