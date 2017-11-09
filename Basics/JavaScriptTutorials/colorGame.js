var numberOfSquares = 6;
var colors = [];
var pickedColor;

var colorDisplay = document.getElementById("color-display");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6; 
            resetBoard();
        });
    }

    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;

            if(clickedColor === pickedColor){
                h1.style.backgroundColor = pickedColor;
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(pickedColor);

            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }

    resetBoard();
}

resetButton.addEventListener("click", function(){
    resetBoard();
});

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * numberOfSquares);
    return colors[random];
}


function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function resetBoard() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

}
