let humanScore = 0;
let computerScore = 0;
let rounds = 0;

const results = document.querySelector("#results");
const roundRes = document.querySelector("#roundRes");

function getComputerChoice(){

    let choice = "none";
    let random = Math.random();

    if(random < 0.333){
        choice = "rock";
    } else if (random < 0.666){
        choice = "paper";
    } else {
        choice = "scissors";
    }

    console.log("The computer choses " + choice);
    return choice

}

function playRound(human){

    rounds++;

    let computer = getComputerChoice();

    if(String(human).toLowerCase() == String(computer)){
        roundRes.textContent = rounds + ": Tie!";
    } else if(String(human).toLowerCase() == "rock") {
        if(String(computer) == "paper"){
            computerScore++;
            roundRes.textContent = rounds + ": You Lose!";
        }else{
            humanScore++;
            roundRes.textContent = rounds + ": You Win!";
        }
    } else if(String(human).toLowerCase() == "paper") {
        if(String(computer) == "scissors"){
            computerScore++;
            roundRes.textContent = rounds + ": You Lose!";
        }else{
            humanScore++;
            roundRes.textContent = rounds + ": You Win!";
        }
    } else if(String(human).toLowerCase() == "scissors") {
        if(String(computer) == "rock"){
            computerScore++;
            roundRes.textContent = rounds + ": You Lose!";
        }else{
            humanScore++;
            roundRes.textContent = rounds + ": You Win!";
        }
    }

    results.textContent = "Current score: " + humanScore + " - " + computerScore;

    if(rounds == 5){

        if(humanScore > computerScore)
            alert("You win!");
        else if(computerScore > humanScore)
            alert("You Lose!");
        else
            alert("Tie!");

        rounds = 0;
        humanScore = 0;
        computerScore = 0;
    }

}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});