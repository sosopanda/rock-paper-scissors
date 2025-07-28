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

getComputerChoice();