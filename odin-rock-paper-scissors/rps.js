function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    switch(selection) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playerInput() {
    while(true) {
        let inputVal = prompt("Please enter your Rock, Paper, Scissors selection: ");
        inputVal = inputVal.slice(0,1).toUpperCase().concat(inputVal.substr(1).toLowerCase());
        if (inputVal !== "Rock" && inputVal !== "Paper" && inputVal !== "Scissors") {
            console.log("Invalid input! Try again.");
            continue;
        }
        return inputVal;
    }
}

function playRound(playerSelection, computerSelection) {

    let result;
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            result = "Tie";
        } else if (computerSelection === "Paper") {
            result = "Lose";
        } else {
            result = "Win";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            result = "Win";
        } else if (computerSelection === "Paper") {
            result = "Tie";
        } else {
            result = "Lose";
        }
    } else {
        if (computerSelection === "Rock") {
            result = "Lose";
        } else if (computerSelection === "Paper") {
            result = "Win";
        } else {
            result = "Tie"
        }
    } 
    if (result === "Tie") {
        return "It's a tie!";
    } else if (result === "Win") {
        return `You ${result}! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You ${result}! ${computerSelection} beats ${playerSelection}!`;
    }
}

function game() {
    for (let i=0; i<5; i++) {
        playerSelection = playerInput();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();