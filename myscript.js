console.log("Hello World");

// Declaracão de variáveis globais
let computerNumber = Number;
let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;


function getComputerChoice(){
    computerNumber = Math.floor(Math.random() * 3) + 1;
    switch (computerNumber){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice(){
    humanChoice = prompt("Rock, paper or scissors?").toLowerCase;
    console.log(humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    switch (humanChoice){
        case 1:
            switch (computerChoice){
                case 1:
                    // EMPATE
                    console.log(computerScore);
                    console.log(humanScore);
                    break;
                case 2:
                    // DERROTA
                    computerScore++;
                    console.log(computerScore);
                    console.log(humanScore);
                    break;
                case 3:
                    // VITORIA
                    humanScore++;
                    console.log(computerScore);
                    console.log(humanScore);
                    break;
            }
        break;
        case 2:
            switch (computerChoice){
                case 1:
                    // VITORIA
                    humanScore++;
                    break;
                case 2:
                    // EMPATE
                    break;
                case 3:
                    // DERROTA
                    computerScore++;
                    break;
            }
        break;
        case 3:
            switch (computerChoice){
                case 1:
                    // DERROTA
                    computerScore++;
                    break;
                case 2:
                    // VITORIA
                    humanScore++;
                    break;
                case 3:
                    // EMPATE
                    break;
            }    
    }
}

getComputerChoice()
getHumanChoice();
round();

// 1 = Pedra 
// 2 = Papel
// 3 = Tesoura
// Pedra(1) < Papel(2) < Tesoura(3) < Pedra(1)
