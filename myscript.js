// Declaracão de variáveis globais
let computerChoice = String;
let humanChoice = String;
let computerScore = 0;
let humanScore = 0;
const result = document.querySelector('#result');


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

function draw(humanChoice){
    // console.log(`Draw! Both chose ${humanChoice}\nPlayer ${humanScore} x ${computerScore} Computer`);
    let li = document.createElement('li')
    li.textContent = `Draw! Both chose ${humanChoice}\nPlayer ${humanScore} x ${computerScore} Computer`;
    result.appendChild(li);

}

function victory(humanChoice, computerChoice){
    humanScore++;
    let li = document.createElement('li')
    li.textContent = `Victory! ${humanChoice} beats ${computerChoice}\nPlayer ${humanScore} x ${computerScore} Computer`;
    result.appendChild(li);
}

function defeat(humanChoice, computerChoice){
    computerScore++;
    let li = document.createElement('li')
    li.textContent = `Defeat! ${computerChoice} beats ${humanChoice}\nPlayer ${humanScore} x ${computerScore} Computer`;
    result.appendChild(li);
}

function playRound(humanChoice){
    computerChoice = getComputerChoice();
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
                    checkScore();
                    break;
                case "Scissors":
                    // VITORIA
                    victory(humanChoice, computerChoice);
                    checkScore();
                    break;
            }
        break;
        case "Paper":
            switch (computerChoice){
                case "Rock":
                    // VITORIA
                    victory(humanChoice, computerChoice);
                    checkScore();
                    break;
                case "Paper":
                    // EMPATE
                    draw(humanChoice);
                    break;
                case "Scissors":
                    // DERROTA
                    defeat(humanChoice, computerChoice);
                    checkScore();
                    break;
            }
        break;
        case "Scissors":
            switch (computerChoice){
                case "Rock":
                    // DERROTA
                    defeat(humanChoice, computerChoice);
                    checkScore();
                    break;
                case "Paper":
                    // VITORIA
                    victory(humanChoice, computerChoice);
                    checkScore();
                    break;
                case "Scissors":
                    // EMPATE
                    draw(humanChoice);
                    break;
            }    
    }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => { playRound('Rock') }); 
paperBtn.addEventListener('click', () => { playRound('Paper') }); 
scissorsBtn.addEventListener('click', () => { playRound('Scissors') }); 

function checkScore(){
    if (humanScore === 5){
        let li = document.createElement('li')
        li.textContent = `Game is over! \nPlayer ${humanScore} x ${computerScore} Computer!\n You won the game!`;
        result.appendChild(li);
        endGame();
    } else if (computerScore === 5){
        let li = document.createElement('li')
        li.textContent = `Game is over! \nPlayer ${humanScore} x ${computerScore} Computer!\n You lost the game!`;
        result.appendChild(li);
        endGame();
    }
}

let endGame = function(){
    humanScore = 0;
    computerScore = 0;
    let li = document.createElement('li')
    li.textContent = 'Starting a new game:'
    result.appendChild(li)
}
// function playGame(){
//     for (let i = 1;  i < 6; i++){
//         playRound(humanChoice, computerChoice);
//     }
//
//     if (humanScore > computerScore){
//         console.log(`Game is over! \nPlayer ${humanScore} x ${computerScore} Computer\nYou won the game!`);
//     } else if (humanScore < computerScore){
//         console.log(`Game is over! \nPlayer ${humanScore} x ${computerScore} Computer\nYou lost the game!`);
//     } else {
//         console.log(`Game is over! \nPlayer ${humanScore} x ${computerScore} Computer\nIt's a draw!`)
//     }
// }

// playGame();

// 1 = Pedra 
// 2 = Papel
// 3 = Tesoura
// Pedra(1) < Papel(2) < Tesoura(3) < Pedra(1)