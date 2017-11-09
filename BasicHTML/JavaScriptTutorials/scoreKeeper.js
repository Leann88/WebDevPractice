var playerOneScore = 0;
var playerTwoScore = 0;

var playingTo = 5;

var winningScoreDisplay = document.querySelector("p span");

var playerOneButton = document.getElementById("playerOneButton");
var playerTwoButton = document.getElementById("playerTwoButton");

var p1ScoreDisplay = document.querySelector("#p1-score");
var p2ScoreDisplay = document.querySelector("#p2-score");

var reset = document.getElementById("reset");

var inputNum = document.querySelector("input");

playerOneButton.addEventListener("click", function(){
    playerOneScore++;
    p1ScoreDisplay.textContent = playerOneScore;

    if (playingTo === playerOneScore) {
        p1ScoreDisplay.style.color = "green";
        disableButtons();
    }

});

playerTwoButton.addEventListener("click", function(){
    playerTwoScore++;
    p2ScoreDisplay.textContent = playerTwoScore;
    if (playingTo === playerTwoScore) {
        p2ScoreDisplay.style.color = "green";
        disableButtons();
    }
});

reset.addEventListener("click", function() {
    resetGame();
}); 

inputNum.addEventListener("change", function() {
    playingTo = Number(this.value);
    winningScoreDisplay.textContent = playingTo;
    resetGame(); 

});

function disableButtons(){
    playerOneButton.disabled = true;
    playerTwoButton.disabled = true;
}

function enableButtons(){
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
}

function resetGame() {
    playerOneScore = 0;
    playerTwoScore = 0;
    playingTo = 5;
    enableButtons();
    p1ScoreDisplay.textContent = playerOneScore;
    p2ScoreDisplay.textContent = playerTwoScore;
    p1ScoreDisplay.style.color = "black";
    p2ScoreDisplay.style.color = "black";
}
