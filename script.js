/* 
    1. function name is getComputerChoice
    2. getComputerChoice randomly selects any of Rock, Paper, Scissors
    3. Math.random chooses different choices
*/

const computerChoice = ["rock", "paper", "scissors"];
let result = "string";

function getComputerChoice() {
    const result = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    console.log(result);
}

getComputerChoice();


/*
    1. function name is getHumanChoice
    2. function will return one of the valid choices by user input
    3.can use prompt method to get users input then console.log
*/


