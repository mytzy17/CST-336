//JavaScript
var randomNumber = Math.floor(Math.random() * 99) + 1;
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHi = document.querySelector('#lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton = document.querySelector('#reset');
resetButton.style.display = 'none';
var resetButton;
guessField.focus()

//wins and losses
var numWins = 0;
var numLosses = 0;

var wins = document.querySelector('#wins');
var losses = document.querySelector('#losses');
//winAndLoss.innerHTML = "Wins: " + numWins + " Losses: " + numLosses;

//document.getElementById("wins").innerHTML = numWins;
//document.getElementById("losses").innerHTML = numLosses;
    
    
function checkGuess(){
    var userGuess = Number(guessField.value);
    if(guessCount === 1 && !isNaN(userGuess)){
        guesses.innerHTML = 'Previous guesses: ';
    }
    if(!isNaN(userGuess)){
        guesses.innerHTML += userGuess + ' ';
    }
    if(userGuess > 99 || isNaN(userGuess)){
            console.log(alert('ERROR'));
            lowOrHi.innerHTML = 'Invalid';
            setGameOver();
        }else{
                // guesses.innerHTML += userGuess + ' ';
            if(userGuess === randomNumber){
                lastResult.innerHTML = 'Congratulations! You got it right!';
                lastResult.style.backgroundColor = '#99ffbb';
                lowOrHi.innerHTML = '';
                setGameOver();
                numWins++;
            }else if(guessCount === 7){
                lastResult.innerHTML = 'Sorry, you lost!';
                setGameOver();
                numLosses++;
            }else{
                lastResult.innerHTML = 'Wrong!';
                lastResult.style.backgroundColor = "red";
                if(userGuess < randomNumber){
                    lowOrHi.innerHTML = 'Last guess was too low!';
                }else if(userGuess > randomNumber){
                    lowOrHi.innerHTML = 'Last guess was too high!';
                }
            }
        }
        guessCount++;
        guessField.value = '';
        guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
}
function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for(var i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = '';
    }
    
    wins.innerHTML = numWins;
    losses.innerHTML = numLosses;
    resetButton.style.display = 'none';
    wins.style.display = 'inline';
    losses.style.display = 'inline';
    
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    
    lastResult.style.backgroundColor = 'white';
    
    randomNumber = Math.floor(Math.random() * 99) + 1;
}

