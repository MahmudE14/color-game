var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

startGame();

function startGame() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (let i = 0; i<modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

            reset();
        });
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        // add click listener to squares
        squares[i].addEventListener("click", function () {
            // grab color of clicked square
            var  clickedColor= this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor == pickedColor) {
                messageDisplay.textContent = "Correct!";
                h1.style.backgroundColor = clickedColor;
                changeColor(clickedColor);
                resetButton.textContent = "Play Again";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}


function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a color from the array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change messageDisplay to empty
    messageDisplay.textContent = "";
    // change button name 
    resetButton.textContent = "New Colors";
    // change all the squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]; 
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});

// colorDisplay.textContent = pickedColor;


function changeColor(color) {
    // loop through all the squares
    for (let i = 0; i < squares.length; i++) {
        // change the color of the squares
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // an array for colors
    var arr =  [];
    // reapeat num times
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

function randomColor() {
    // create "red" 0 - 255
    var r = Math.floor(Math.random() * 256);
    // create "green" 0 - 255
    var g = Math.floor(Math.random() * 256);
    // create "blue" 0 - 255
    var b = Math.floor(Math.random() * 256);
    // return a string: rgb(r, g, b)
    return "rgb(" + r + ", " + g + ", " + b +")";
}
