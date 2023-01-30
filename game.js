function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const randy = Math.floor(Math.random() * choice.length);
  return choice[randy];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLocaleLowerCase();

  if (playerSelection === computerSelection) {
    infoOne.textContent = "It's tie!";
    infoTwo.textContent = `${
      playerSelection[0].toUpperCase() + playerSelection.substring(1)
    } ties with ${
      computerSelection[0].toUpperCase() + computerSelection.substring(1)
    }`;
    return "Game is tie, try again";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      infoOne.textContent = "You won!";
      infoTwo.textContent = `${
        playerSelection[0].toUpperCase() + playerSelection.substring(1)
      } beats ${
        computerSelection[0].toUpperCase() + computerSelection.substring(1)
      }`;
      return "You win, Rock beats Scissors!";
    } else {
      infoOne.textContent = "You lost!";
      infoTwo.textContent = `${
        computerSelection[0].toUpperCase() + computerSelection.substring(1)
      } beats ${
        playerSelection[0].toUpperCase() + playerSelection.substring(1)
      }`;
      return "You lose, Paper beats Rock!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      infoOne.textContent = "You won!";
      infoTwo.textContent = `${
        playerSelection[0].toUpperCase() + playerSelection.substring(1)
      } beats ${
        computerSelection[0].toUpperCase() + computerSelection.substring(1)
      }`;
      return "You win, Paper beats Rock!";
    } else {
      infoOne.textContent = "You lost!";
      infoTwo.textContent = `${
        computerSelection[0].toUpperCase() + computerSelection.substring(1)
      } beats ${
        playerSelection[0].toUpperCase() + playerSelection.substring(1)
      }`;
      return "You lose, Scissors beats Paper!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      infoOne.textContent = "You won!";
      infoTwo.textContent = `${
        playerSelection[0].toUpperCase() + playerSelection.substring(1)
      } beats ${
        computerSelection[0].toUpperCase() + computerSelection.substring(1)
      }`;
      return "You win, Scissors beats Paper!";
    } else {
      infoOne.textContent = "You lost!";
      infoTwo.textContent = `${
        computerSelection[0].toUpperCase() + computerSelection.substring(1)
      } beats ${
        playerSelection[0].toUpperCase() + playerSelection.substring(1)
      }`;
      return "You lose, Rock beats Scissors!";
    }
  } else {
    return "Incorrect input, try again!";
  }
}

const infoOne = document.querySelector("#infoOne");
const infoTwo = document.querySelector("#infoTwo");

const rockChoice = document.querySelector("#rockChoice");
const paperChoice = document.querySelector("#paperChoice");
const scissorsChoice = document.querySelector("#scissorsChoice");

const playerSing = document.querySelector("#playerSing");
const compSing = document.querySelector("#compSing");
const pScore = document.querySelector("#playerScore");
const cScore = document.querySelector("#compScore");

const overlay = document.querySelector("#overlay");
const endGameWon = document.querySelector("#endGameWon");
const endGameLost = document.querySelector("#endGameLost");
const closeGame = document.querySelector(".closeGame");
const closeGameLost = document.querySelector(".closeGameLost");

const izbor = document.querySelectorAll(".butt");

izbor.forEach((choice) => choice.addEventListener("click", play));

let playerScore = 0;
let computerScore = 0;

function play(e) {
  playerSelection = e.currentTarget.id;
  computerSelection = getComputerChoice();
  const winner = playRound(playerSelection, computerSelection);
  a(winner);
  b(playerSelection);
  c(computerSelection);
  d(playerScore, computerScore);

  console.log(winner);
}

//FUNKCIJA KOJA PRATI SCORE I MINJA REZULTAT NA STRANICI
function a(winner) {
  if (winner.startsWith("You win")) {
    playerScore++;
    pScore.textContent = `Player: ${playerScore}`;
  } else if (winner.startsWith("You lose")) {
    computerScore++;
    cScore.textContent = `Player: ${computerScore}`;
  }
}

// FUNKCIJA ZA OGRANICAVANJE NA 5 POBJEDNICKIH RUNDI
function d(playerScore, computerScore) {
  if (playerScore === 3) {
    endGameWon.classList.add("open");
    overlay.classList.add("open");
    console.log("kraj igre");
  } else if (computerScore === 3) {
    endGameLost.classList.add("open");
    overlay.classList.add("open");
    console.log("kraj igre2");
  }
}

// FUKCIJA ZA MINJANJE SLIKE IGRACA
function b(playerSelection) {
  if (playerSelection === "Rock") {
    playerSing.src = "./pictures/rockICON.png";
  } else if (playerSelection === "Paper") {
    playerSing.src = "./pictures/paperICON.png";
  } else if (playerSelection === "Scissors") {
    playerSing.src = "./pictures/scissorsICON.png";
  }
}

//FUNCKIJA ZA MINJANJE SLIKE COMPUTERA
function c(computerSelection) {
  if (computerSelection === "Rock") {
    compSing.src = "./pictures/rockICON.png";
  } else if (computerSelection === "Paper") {
    compSing.src = "./pictures/paperICON.png";
  } else if (computerSelection === "Scissors") {
    compSing.src = "./pictures/scissorsICON.png";
  }
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  infoOne.textContent = "Choose your weapon!";
  infoTwo.textContent = "Best of 5 round wins the game!";
  pScore.textContent = "Player: 0";
  cScore.textContent = "Computer: 0";
  playerSing.src =
    "./pictures/—Pngtree—hand drawn cartoon question mark_4555045.png";
  compSing.src =
    "./pictures/—Pngtree—hand drawn cartoon question mark_4555045.png";
  endGameWon.classList.remove("open");
  endGameLost.classList.remove("open");
  overlay.classList.remove("open");
}

closeGame.addEventListener("click", restartGame);
closeGameLost.addEventListener("click", restartGame);

overlay.addEventListener("click", (e) => {
  e.preventDefault();
  endGameWon.classList.remove("open");
  endGameLost.classList.remove("open");
  overlay.classList.remove("open");
});




// LOGIKA ZA 5 RUNDI

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
