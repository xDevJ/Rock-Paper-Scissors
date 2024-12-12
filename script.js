const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const button = document.querySelector("#choices");

const div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute("id", "results");
const results = document.querySelector("#results"); 
div.setAttribute("class", "announce");
const announce = document.querySelector(".announce");

div.style.textAlign = "center";
div.style.fontSize = "30px";
div.style.color = "blue";


button.addEventListener('click', e => {
   
    function getComputerChoice() {
        const computerChoice = options[Math.floor(Math.random() * options.length)];
    
        return computerChoice;
    }

    function getHumanChoice(){
        
        const humanChoice = e.target.textContent;
        return humanChoice;
    }
   function playRound(humanChoice, computerChoice){
        const playerSelection = humanChoice;
        const playerWins = (`You Win! ${playerSelection} beats ${computerChoice}`);
        const computerWins = (`You Lose! ${computerChoice} beats ${playerSelection}`);
        const tie = ("Tie")

       
        if(
            (playerSelection == "rock" && computerChoice == "rock") ||
            (playerSelection == "paper" && computerChoice == "paper") ||
            (playerSelection == "scissors" && computerChoice == "scissors")
        ){
            results.textContent = (tie);
        } else if(
            (playerSelection == "rock" && computerChoice == "scissors") ||
            (playerSelection  == "paper" && computerChoice == "rock") ||
            (playerSelection == "scissors" && computerChoice == "paper")
        ){
            humanScore++;
            results.textContent = (playerWins + ' ' + humanScore + '-' + computerScore);
            
        } else {
            computerScore++;
            results.textContent = (computerWins+ ' ' + humanScore + '-' + computerScore);
            
        } 
        
        if(humanScore === 5){
            results.textContent = (playerWins + ' ' + humanScore + '-' + computerScore);
            announce.textContent = ("Player Wins!");
            humanScore = 0;
            computerScore = 0;

        } else if (computerScore ===  5){
            results.textContent = (computerWins + ' ' + humanScore + '-' + computerScore);
            announce.textContent = ("Computer Wins!");
            humanScore = 0;
            computerScore = 0;
        }
        
        
        
    
        
        
    }
    playRound(getHumanChoice(), getComputerChoice(),);
    
}); 


