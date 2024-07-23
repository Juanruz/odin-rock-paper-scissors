console.log("Hello World");

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = Number(prompt("1: Pedra \n2: Papel \n3: Tesoura"));
    console.log(humanChoice);
    return humanChoice;
}

getHumanChoice();