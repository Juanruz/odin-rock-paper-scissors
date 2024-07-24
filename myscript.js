console.log("Hello World");

// Declaracão de variáveis globais
let computerNumber = Number;
let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

function upperFirst(str){
    let modStr = str[0].toUpperCase() + str.slice(1);
    return modStr;
}

function getComputerChoice(){
    computerNumber = Math.floor(Math.random() * 3) + 1;
    switch (computerNumber){
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice(){
    humanChoice = upperFirst(prompt("Rock, paper or scissors?").toLowerCase());
    console.log(humanChoice);
    return humanChoice;
}

// function draw(humanChoice){
//     console.log(`Oops, it's a draw! Both selected ${humanChoice}`);
// }

// function win(humanChoice, computerChoice){
//     humanScore++;
//     console.log(`You win! ${humanChoice} beats `)
// }

function playRound(humanChoice, computerChoice){
    switch (humanChoice){
        case 1:
            switch (computerChoice){
                case 1:
                    // EMPATE
                    console.log(computerScore);
                    console.log(humanScore);
                    console.log(humanScore);
                    break;
                case 2:
                    // DERROTA
                    computerScore++;
                    console.log(computerScore);
                    console.log(humanScore);
                    console.log(humanScore);
                    break;
                case 3:
                    // VITORIA
                    humanScore++;
                    console.log(computerScore);
                    console.log(humanScore);
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
playRound();

// 1 = Pedra 
// 2 = Papel
// 3 = Tesoura
// Pedra(1) < Papel(2) < Tesoura(3) < Pedra(1)
