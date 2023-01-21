// function getComputerChoice() {
//   const choice = ["Rock", "Paper", "Scissors"];
//   const randy = Math.floor(Math.random() * choice.length);
//   return choice[randy];
// }

// function playRound(playerSelection, computerSelection) {
//   playerSelection = playerSelection.toLowerCase();
//   computerSelection = computerSelection.toLocaleLowerCase();

//   if (playerSelection === computerSelection) {
//     return "Game is tie, try again";
//   } else if (playerSelection === "rock") {
//     if (computerSelection === "scissors") {
//       return "You win, Rock beats Scissors!";
//     } else {
//       return "You lose, Paper beats Rock!";
//     }
//   } else if (playerSelection === "paper") {
//     if (computerSelection === "rock") {
//       return "You win, Paper beats Rock!";
//     } else {
//       return "You lose, Scissors beats Paper!";
//     }
//   } else if (playerSelection === "scissors") {
//     if (computerSelection === "paper") {
//       return "You win, Scissors beats Paper!";
//     } else {
//       return "You lose, Rock beats Scissors!";
//     }
//   } else {
//     return "Incorrect input, try again!";
//   }
// }

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     playerSelection = prompt("Let's play, choose Rock, Paper or Scissors");
//     computerSelection = getComputerChoice();

//     let result = playRound(playerSelection, computerSelection);
//     console.log(result);

//     if (result.startsWith("You win")) {
//       playerScore++;
//       console.log(`One point for player`);
//     } else if (result.startsWith("You lose")) {
//       computerScore++;
//       console.log("One point for Computer");
//     }
//   }

//   if (playerScore > computerScore) {
//     console.log(`You won, final score is ${playerScore}:${computerScore}`);
//   } else if (playerScore < computerScore) {
//     console.log(
//       `You lose, final score is ${playerScore}:${computerScore}, PLAY AGAIN!`
//     );
//   } else {
//     console.log(`It's a tie! Score: ${playerScore}-${computerScore}`);
//   }
// }

// game();
