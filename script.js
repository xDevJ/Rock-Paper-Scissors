/* 
STEP 2
    1. function name is getComputerChoice
    2. getComputerChoice randomly selects any of Rock, Paper, Scissors
    3. Math.random chooses different choices
*/

const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerSelect = options[Math.floor(Math.random() * options.length)];

    return computerSelect;
}

/*
STEP 3
    1. function name is getHumanChoice
    2. function will return one of the valid choices by user input
    3.can use prompt method to get users input then console.log
*/
function getHumanChoice(){
    let humanChoice  = prompt()
    return humanChoice;
    
    
} 



/* 
1. function name playRound !
2. playRound() has two parameters humanChoice and computerChoice. paramets : humanChoice and computerChoice will take the human and computer choices as arguments.!
3. playRound() will console.log a string "You Lose! Paper beats Rock" !
4. increment humanScore || computerScore based on round winners!
*/
// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice){
    if(
        (humanChoice == "rock" && computerChoice == "rock") ||
        (humanChoice == "paper" && computerChoice == "paper") ||
        (humanChoice == "scissors" && computerChoice == "scissors")
    ){
        console.log("Tie");
    } else if(
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ){
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }
    

   
}
/*
1. function name is playGame
2. playRound() and score variables are declared inside playGame()
3. play 5 rounds by calling playRound 5 times
*/
function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log(`Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
}
playGame();