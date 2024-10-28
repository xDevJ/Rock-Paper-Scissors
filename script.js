/* 
    1. function name is getComputerChoice
    2. getComputerChoice randomly selects any of Rock, Paper, Scissors
    3. Math.random chooses different choices
*/

function getComputerChoice(Rock, Paper, Scissors) {
    const result = Math.floor(Math.random() * 3)

    return result;
}

let result = "";
console.log(result);