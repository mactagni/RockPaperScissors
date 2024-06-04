import readlineSync from 'readline-sync';

function systemChoice() {
    const options = ['rock', 'paper', 'scissors'];

    let randomNum = Math.floor(Math.random() * 3);

    return options[randomNum];
}

function whoWon(userInput) {
    if(userInput === 'exit') return { winner: 'NONE, PROGRAM TERMINATED'}

    const stringToCheckAgainst = 'rock,paper,scissors';

    if(!stringToCheckAgainst.includes(userInput)) {
        return false
    };

    let computer = systemChoice();

    console.log(`
      computer: ${computer}
      you: ${userInput}
    `)

    if(userInput === computer) return false;

    if(userInput === 'rock' && computer === 'scissors') return { winner: 'user' }
    if(userInput === 'paper' && computer === 'rock') return { winner: 'user' }
    if(userInput === 'scissors' && computer === 'paper') return { winner: 'user' }

    if(computer === 'rock' && userInput === 'scissors') return { winner: 'computer' }
    if(computer === 'paper' && userInput === 'rock') return { winner: 'computer' }
    if(computer === 'scissors' && userInput === 'paper') return { winner: 'computer' }
}

function game() {
    let winner = false;

    let userInput = readlineSync.question(`Rock, Paper, Scissors? or 'exit' \n`)

    let outcome = whoWon(userInput);

    winner = outcome;

    if(!winner) {
        game();
    } else {
        console.log('Winner: ', winner.winner);
    }

}

game();


