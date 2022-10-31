'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1,
  score = 20,
  highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  },
  displayScore = function (theScore) {
    document.querySelector('.score').textContent = theScore;
  };

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🛑 No number! 🛑';
    displayMessage('🛑 No number! 🛑');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number! 🎉');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayScore(score);
      displayMessage(
        guess > secretNumber
          ? '📈 Number is too high! 📈'
          : '📉 Number is too low! 📉'
      );
    } else {
      displayMessage('☠ You lost the game!');
      displayScore(0);
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
