// computerPlay Function: 
// Random Number between 1 and 3
// store computerSelection:
// change computerPlay to computerSelection
// 1 is "rock", 2 is "paper", 3 is "scissors"
// return computerPlay

const min = 1;
const max = 3;

function computerPlay(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    if (result === 1) { return "ROCK" }
    else if (result === 2) { return "SCISSORS" }
    else { return "PAPER" }
}


// prompt playerSelection
// case-insensitive, only "rock paper scissors" allowed
// is rock paper or scissors? -> true, else back to start

function playerSelection() {
    let input = prompt("Choose Rock, Paper or Scissors")
    let inputBig = input.toUpperCase();
    if (inputBig == "ROCK") {
        return "ROCK";
    }
    else if (inputBig == "SCISSORS") {
        return "SCISSORS";
    }
    else if (inputBig == "PAPER") {
        return "PAPER";
    }
    else return "ERROR";
}

//execute functions and store values
let computerDecision = computerPlay(1,3);
let playerDecision = playerSelection();

//compare decisions and output Winning Statement
if (computerDecision == playerDecision){
    console.log(`DRAW! Both Players chose ${computerDecision}.`);
}
else if ((computerDecision == "ROCK" && playerDecision == "SCISSORS") || (computerDecision == "SCISSORS" && playerDecision == "PAPER") || (computerDecision == "PAPER" && playerDecision == "ROCK")){
    console.log(`You lose! ${computerDecision} beats ${playerDecision}.`)
}

else {
    console.log(`You win! ${playerDecision} beats ${computerDecision}.`)
}
