let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){

    let choice = prompt("Please select Rock, Paper or Scissors");
    console.log("You chose " + choice);
    return choice;

}

function playRound(){

    let human = getHumanChoice();
    let computer = getComputerChoice();

    if(String(human).toLowerCase() == String(computer)){
        console.log("Tie!");
    } else if(String(human).toLowerCase() == "rock") {
        if(String(computer) == "paper"){
            computerScore++;
            console.log("You Lose!");
        }else{
            humanScore++;
            console.log("You Win!");
        }
    } else if(String(human).toLowerCase() == "paper") {
        if(String(computer) == "scissors"){
            computerScore++;
            console.log("You Lose!");
        }else{
            humanScore++;
            console.log("You Win!");
        }
    } else if(String(human).toLowerCase() == "scissors") {
        if(String(computer) == "rock"){
            computerScore++;
            console.log("You Lose!");
        }else{
            humanScore++;
            console.log("You Win!");
        }
    }

}

function playGame(){
    for (let i = 0 ; i < 5 ; i++){
        playRound();
        console.log("Current score: " + humanScore + " - " + computerScore);
    }
}

playGame();