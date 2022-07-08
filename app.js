function computerPlay() {
    let option = ["Rock", "Paper", "Scissors"]
    return option[Math.floor(Math.random()*option.length)];
}


function playRound(playerSelection, computerSelection) {
    const hands = playerSelection + computerSelection;
    switch (hands) {
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            return `draw`;
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            return `win`
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            return `lose`;
    }
}


const selections = document.querySelectorAll('button');
const outcomeTxt = document.querySelector('#outcome');
const yourscore = document.querySelector('#yourscore');
const compscore = document.querySelector('#compscore');
const playagain = document.createElement('button');
    playagain.style.fontSize = "30px";
const results = document.querySelector('.results');

function disableBtns() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function enableBtns() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

let losses = 0;
let wins = 0;
let outcome;

// core of player interaction

function game(res, playerChoice, compChoice) {
    if (res === 'win') {
        wins += 1;
        outcomeTxt.textContent = `You win, ${playerChoice.textContent} beats ${compChoice}`;
        yourscore.textContent = `You: ${wins}`;
        compscore.textContent = `Computer: ${losses}`;
    } else if (res === 'lose') {
        losses += 1;
        outcomeTxt.textContent = `You lose, ${compChoice} beats ${playerChoice.textContent}`;
        yourscore.textContent = `You: ${wins}`;
        compscore.textContent = `Computer: ${losses}`;
    } else if (res === 'draw') {
        outcomeTxt.textContent = `Draw, you both played ${compChoice}`;
    }

    if (wins === 5) {
        outcomeTxt.textContent = `You won! The final score is 5 to ${losses}`;
        disableBtns();
        playagain.textContent = `Play again?`;
        results.appendChild(playagain);
        playagain.onclick = () => {
            results.removeChild(playagain);
            enableBtns();
            losses = 0;
            wins = 0;
            yourscore.textContent = `You: ${wins}`;
            compscore.textContent = `Computer: ${losses}`;
            playagain.textContent = "";
            outcomeTxt.textContent = "Let's play a game of Rock, Paper, Scissors. First to 5 wins.";
        }
    } else if (losses === 5) {
        outcomeTxt.textContent = `You lost! The final score is ${wins} to 5`;
        disableBtns();
        playagain.textContent = `Play again?`;
        results.appendChild(playagain);
        playagain.onclick = () => {
            results.removeChild(playagain);
            enableBtns();
            losses = 0;
            wins = 0;
            yourscore.textContent = `You: ${wins}`;
            compscore.textContent = `Computer: ${losses}`;
            playagain.textContent = "";
            outcomeTxt.textContent = "Let's play a game of Rock, Paper, Scissors. First to 5 wins.";
        }
    }
}

selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        let computerSelection = computerPlay();
        outcome = playRound(selection.textContent, computerSelection);

        game(outcome, selection, computerSelection);
    })
})


// my attempt to mouseover display images (works, but prevents the 'click' listener from working)

    // selection.addEventListener("mouseover", () => {
    //     if (selection.id === 'rock') {
    //         document.getElementById("rock").textContent = "";
    //         let img = document.createElement("img");
    //         img.setAttribute("src", './images/rock.jpeg');
    //         selection.appendChild(img);
    //     } else if (selection.id === 'paper') {
    //         document.getElementById("paper").textContent = "";
    //         let img = document.createElement("img");
    //         img.setAttribute("src", './images/paper.webp');
    //         selection.appendChild(img);
    //     } else if (selection.id === 'scissors') {
    //         document.getElementById("scissors").textContent = "";
    //         let img = document.createElement("img");
    //         img.setAttribute("src", './images/scissors.jpeg');
    //         selection.appendChild(img);
    //     }
    // });

    // selection.addEventListener("mouseout", () => {
    //     if (selection.id === 'rock') {
    //         document.getElementById("rock").textContent = "Rock";
    //     } else if (selection.id === 'paper') {
    //         document.getElementById("paper").textContent = "Paper";
    //     } else if (selection.id === 'scissors') {
    //         document.getElementById("scissors").textContent = "Scissors";
    //     }
    // })





