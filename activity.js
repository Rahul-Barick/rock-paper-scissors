//Gets User Choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' ||
        userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log(`Invalid user choice:: ${userInput}`);
        return null;
    }
};

//Get Computer Choice
const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 2);
    if (randomChoice === 0) {
        return 'rock';
    }

    if (randomChoice === 1) {
        return 'paper';
    }

    if (randomChoice === 2) {
        return 'scissors';
    } else {
        return 'rock';
    }
}

// Compare's userChoice, computerChoice and then determine winner
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Your Game was a tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer won!';
        } else {
            return 'Congratulations, You Won!';
        }
    };

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won!';
        } else if (computerChoice === 'rock') {
            return 'Congratulations, You Won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer won!';
        } else if (computerChoice === 'paper') {
            return 'Congratulations, You Won!';
        }
    }

    //Secret Cheat code where user want's to win
    if (userChoice === 'bomb') {
        return 'Congratulations, You Won!';
    }
};

//Let's play the fun Game
const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    if (userChoice) {
        console.log(`UserChoice:: ${userChoice}`);
        console.log(`ComputerChoice:: ${computerChoice}`);
        console.log(determineWinner(userChoice, computerChoice));
    }
};

playGame();
