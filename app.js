function computerPlay() {
    let option = ["rock", "paper", "scissors"]
    return option[Math.floor(Math.random()*option.length)];
}


function playRound(playerSelection, computerSelection) {
    const hands = playerSelection.toLowerCase() + computerSelection;
    // console.log(hands);
    switch (hands) {
        case "rockrock":
        case "paperpaper":
        case "scissorscissors":
        case "scissorsscissors":
            // console.log("true");
            return `Draw. You both played ${computerSelection}.`;
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        case "scissorpaper":
            // console.log("true");
            return `You win. ${playerSelection.toLowerCase()} beats ${computerSelection}`;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
        case "scissorrock":
            // console.log("true");
            return `You lose. ${computerSelection} beats ${playerSelection.toLowerCase()}`;
        default:
            console.log("You entered an invalid play.");
            return "Invalid play";
    }
}

// console.log(playRound(prompt("Rock, paper, scissors?"), computerPlay()));

function game() {
    let playerWins = 0;
    let computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
        let round = playRound(prompt("Rock, paper, scissors?"), computerPlay());
        if (round.indexOf("Draw") >= 0) {
            console.log(`Current score:\nPlayer:${playerWins}\nComputer:${computerWins}`);
            continue;
        } else if (round.indexOf("You win") >= 0) {
            playerWins++;
            console.log(`Current score:\nPlayer:${playerWins}\nComputer:${computerWins}`);
        } else if (round.indexOf("You lose.") >= 0) {
            console.log(`Current score:\nPlayer:${playerWins}\nComputer:${computerWins}`);
            computerWins++;
        } else {
            continue;
        }
    }

    if (playerWins === 5) {
        console.log(`You win! The final score is ${playerWins} to ${computerWins}`);
    } else {
        console.log(`You lose! The final score is ${playerWins} to ${computerWins}`);
    }
}

game();

