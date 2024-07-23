console.log("Hello World");

// Declaracão de variáveis globais
let humanChoice = Number;
let computerChoice = Number;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

function getHumanChoice(){
    humanChoice = Number(prompt("1: Pedra \n2: Papel \n3: Tesoura"));
    console.log(humanChoice);
    return humanChoice;
}

function score(){
    switch (humanChoice){
        case 1:
            switch (computerChoice){
                case 1:
                    // EMPATE
                    break;
                case 2:
                    // DERROTA
                    computerScore++;
                    break;
                case 3:
                    // VITORIA
                    humanScore++;
                    break;
            }
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

getHumanChoice();

// 1 = Pedra 
// 2 = Papel
// 3 = Tesoura
// Pedra(1) < Papel(2) < Tesoura(3) < Pedra(1)
