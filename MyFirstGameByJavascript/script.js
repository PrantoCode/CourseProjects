'use strict'; //This helps to find bugs in code

let secretNumber = Math.trunc(Math.random() * 20 + 1); //Created a secret number which we will guess
let score = document.querySelector('.score').textContent; //This is my score
//This is here to show the random number
let highScore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  //Here I attatched an event listener in to the check button
  //When ever I click check button the function runs
  const guess = Number(document.querySelector('.guess').value);
  //If there is no number given
  if (!guess) {
    document.querySelector('.message').textContent = '🤷‍♂️ No number given!';
  }
  //when player wins the game
  else if (guess == secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "🤭 It's too high" : "🤭 It's too low"
      );
      score--;
      document.querySelector('.score').textContent = score; //Update the lowed score
    }
    //when the score is 0
    else {
      document.querySelector('.score').textContent = 0;
      displayMessage('🤯 You loose the game');
    }
  }
  //when players guess is too high
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';

  score = 20;
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
