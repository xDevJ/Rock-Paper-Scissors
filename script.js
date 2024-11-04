/* 
    1. function name is getComputerChoice
    2. getComputerChoice randomly selects any of Rock, Paper, Scissors
    3. Math.random chooses different choices
*/

const options = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const computerSelect = options[Math.floor(Math.random() * computerChoice.length)];

    console.log(options);
}

getComputerChoice();



/*
    1. function name is getHumanChoice
    2. function will return one of the valid choices by user input
    3.can use prompt method to get users input then console.log
*/

const userInput = computerChoice; 

function getHumanChoice(){
    const userInput = prompt()
    console.log(userInput);
} 

getHumanChoice();
