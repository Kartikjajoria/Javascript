let userScore = 0;
let computerScore = 0;

function getRandomChoice() {
    const choices = ['ST', 'P', 'SC'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(userChoice) {
    const computerChoice = getRandomChoice();

    let result;
    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (userChoice === 'ST' && computerChoice === 'SC') ||
        (userChoice === 'SC' && computerChoice === 'P') ||
        (userChoice === 'P' && computerChoice === 'ST')
    ) {
        result = 'You win!';
        userScore++;
    } else {
        result = 'You lose!';
        computerScore++;
    }

    alert(`Computer chose: ${computerChoice}\n${result}`);
}

function startGame() {
    for (let round = 1; round <= 5; round++) {
        const userChoice = prompt(`Round ${round}: Enter your choice: ST (Stone), P (Paper), SC (Scissor)`).toUpperCase();

        if (userChoice === 'ST' || userChoice === 'P' || userChoice === 'SC') {
            playGame(userChoice);
        } else {
            alert('Invalid choice! Please choose ST, P, or SC.');
            round--; // Decrement round to repeat this round
        }
    }

    if (userScore > computerScore) {
        alert(`Congratulations! You win with a score of ${userScore}-${computerScore}`);
    } else if (userScore < computerScore) {
        alert(`Sorry! You lose with a score of ${userScore}-${computerScore}`);
    } else {
        alert(`It's a tie! Final score: ${userScore}-${computerScore}`);
    }
}

startGame();