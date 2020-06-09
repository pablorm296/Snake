const w = 500;
const h = w;
const size = 30;
const tileSize = w / size;
const fRate = 10;
const nFood = size;
var mainSnake;
var mainFood;

function setup() {
    // Create main canvas and center it
    var main = createCanvas(w, h);
    const canvas_xPos = (windowWidth - w) / 2;
    const canvas_yPos = (windowHeight - h) / 2;
    main.position(canvas_xPos, canvas_yPos);

    //Change framerate
    frameRate(fRate);

    // Change background
    background(0);

    // Create a new food
    mainFood = new Food();

    // Create new snake
    mainSnake = new Snake(w / 2, h / 2);
    mainSnake.draw();
}

function draw() {
    // Reset background
    background(0);

    // Draw food
    mainFood.draw();

    // Draw snake
    mainSnake.draw();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        mainSnake.setDir("up");
    }
    if (keyCode === LEFT_ARROW) {
        mainSnake.setDir("left");
    }
    if (keyCode === RIGHT_ARROW) {
        mainSnake.setDir("right");
    }
    if (keyCode === DOWN_ARROW) {
        mainSnake.setDir("down");
    }
}