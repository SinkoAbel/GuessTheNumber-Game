'use strict';

// For the secret number
function TheRandomNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}

// For displaying the messages
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


let secretNumber = TheRandomNumber();
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('⛔ Please give a number!');
    }

    // When player wins
    else if (guess === secretNumber) {
        displayMessage('✔️ Correct Number!');

        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }

        // CSS manipulatuin: background
        document.querySelector('body').style.backgroundColor = '#60b347';

        // CSS manipulation for box-size
        document.querySelector('.number').style.width = '30rem';

    }

    // When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? `Your guess is higher!` : `Your guess is lower!`);

            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage(`You lost!`);

            document.querySelector('.score').textContent = 0;

            document.querySelector('.number').textContent = secretNumber;


            document.querySelector('body').style.backgroundColor = '#d40000';
            document.querySelector('.number').style.width = '30rem';
        }
    }
});


//implementing the Again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = TheRandomNumber();

    displayMessage(`Start guessing...`);
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
