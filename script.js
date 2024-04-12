        //At random, pick either Rock, Paper, or Scissors for the computer.
        function getComputerChoice() {

            const compChoices = ["Rock", "Paper", "Scissors"];

            let computerSelection = Math.floor(Math.random() * compChoices.length) + 1;

            switch (computerSelection) {

                case 1: computerSelection = "Rock";
                break;

                case 2: computerSelection = "Paper";
                break;

                case 3: computerSelection = "Scissors";
                break;

            }
            computerSelection = computerSelection.toLowerCase();
            return computerSelection;
        };

        //Play a round of Rock Paper Scissors.
        function playRound(playerSelection, computerSelection) {

            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection.toLowerCase();

            if (playerSelection === "rock") {
                switch (computerSelection) {
                    case "rock": 
                        return "You tied!";
                        break;

                    case "paper":
                        return "You lose! Paper beats Rock!";
                        break;

                    case "scissors":
                        return "You win! Rock beats Scissors!";
                        break;
                }
            } else if (playerSelection === "paper") {
                switch (computerSelection) {
                    case "rock": 
                        return "You win! Paper beats Rock!";
                        break;

                    case "paper":
                        return "You tied!";
                        break;

                    case "scissors":
                        return "You lose! Scissors beats Paper!";
                        break;

            }
        } else if (playerSelection === "scissors") {
                switch (computerSelection) {
                    case "rock": 
                        return "You lose! Rock beats Scissors!";
                        break;

                    case "paper":
                        return "You win! Scissors beats Paper";
                        break;

                    case "scissors":
                        return "You tied!";
                        break;
                }
            }
    
        };

        


   
function playGame() {

let playerSelection;
let computerSelection;

let p = 0;
let c = 0;

for (let i = 0; i < 5 ; i++) {

    let playerSelection = prompt("Please choose Rock, Paper, or Scissors.");
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);
    console.log(result);
 
    if (result.charAt(4) === "w") {
        p++;

    } else if (result.charAt(4) === "l") {
        c++;

    } else {
        p = p + 1;
        c = c  + 1;
    };


};

if (p > c) {
    return "Congrats! You won the game!"
} else if (p < c) {
   return "You lost. Better luck next time."
} else {
   return "You tied!"
}

};
    
        gameResult = playGame();
        console.log(gameResult);