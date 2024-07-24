console.log("Hello World");

// Declaracão de variáveis globais
let computerChoice = String;
let humanChoice = String;
let computerScore = 0;
let humanScore = 0;

function upperFirst(str){
    let modStr = str[0].toUpperCase() + str.slice(1);
    return modStr;
}

function getComputerChoice(){
    let computerNumber = Math.floor(Math.random() * 3) + 1;
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
    return humanChoice;
}

function draw(humanChoice){
    console.log(`Draw! Both chose ${humanChoice}\nPlayer ${humanScore} x ${computerScore} Computer`);
}

function victory(humanChoice, computerChoice){
    humanScore++;
    console.log(`Victory! ${humanChoice} beats ${computerChoice}\nPlayer ${humanScore} x ${computerScore} Computer`);
}

function defeat(humanChoice, computerChoice){
    computerScore++;
    console.log(`Defeat! ${computerChoice} beats ${humanChoice}\nPlayer ${humanScore} x ${computerScore} Computer`);
}

function playRound(humanChoice, computerChoice){
    switch (humanChoice){
        case "Rock":
            switch (computerChoice){
                case "Rock":
                    // EMPATE
                    draw(humanChoice);
                    break;
                case "Paper":
                    // DERROTA
                    defeat(humanChoice, computerChoice);
                    break;
                case "Scissors":
                    // VITORIA
                    victory(humanChoice, computerChoice);
                    break;
            }
        break;
        case "Paper":
            switch (computerChoice){
                case "Rock":
                    // VITORIA
                    victory(humanChoice, computerChoice);
                    break;
                case "Paper":
                    // EMPATE
                    draw(humanChoice);
                    break;
                case "Scissors":
                    // DERROTA
                    defeat(humanChoice, computerChoice);
                    break;
            }
        break;
        case "Scissors":
            switch (computerChoice){
                case "Rock":
                    // DERROTA
                    defeat(humanChoice, computerChoice);
                    break;
                case "Paper":
                    // VITORIA
                    victory(humanChoice, computerChoice);
                    break;
                case "Scissors":
                    // EMPATE
                    draw(humanChoice);
                    break;
            }    
    }
}

function playGame(){
    for (let i = 1;  i < 6; i++){
        getComputerChoice();
        getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore){
        console.log(`Game is over! \nPlayer ${humanScore} x ${computerScore} Computer\nYou won the game!`);
    } else if (humanScore < computerScore){
        console.log(`Game is over! \nPlayer ${humanScore} x ${computerScore} Computer\nYou lost the game!`);
    } else {
        console.log(`Game is over! \nPlayer ${humanScore} x ${computerScore} Computer\nIt's a draw!`)
    }
}

playGame();


// 1 = Pedra 
// 2 = Papel
// 3 = Tesoura
// Pedra(1) < Papel(2) < Tesoura(3) < Pedra(1)
