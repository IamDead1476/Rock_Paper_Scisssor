const computerChoiceElement = document.getElementById('computer-choice');
const userChoiceElement = document.getElementById('your-choice');
const resultElement = document.getElementById('result');

let userChoice;
let computerChoice;
let result;

const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach( possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceElement.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // to generate random number in the range 1 to 3

    if(randomNumber === 1){
        computerChoice = 'rock';
    }
    if(randomNumber === 2){
        computerChoice = 'paper';
    }
    if(randomNumber === 3){
        computerChoice = 'scissor';
    }

    computerChoiceElement.innerHTML = computerChoice;
};

function getResult() {
    if(computerChoice === userChoice){
        result = "It's a draw!";
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = "You Won!";
    }
    if(computerChoice === 'rock' && userChoice === 'scissor'){
        result = "You Lost!";
    }
    if(computerChoice === 'scissor' && userChoice === 'paper'){
        result = "You Lost!";
    }
    if(computerChoice === 'scissor' && userChoice === 'rock'){
        result = "You Won!";
    }
    if(computerChoice === 'paper' && userChoice === 'scissor'){
        result = "You Won!";
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = "You Lost!";
    }

    resultElement.innerHTML = result;
};