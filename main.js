const w = 500;
const h = w;
const nrows = 25;
const ncols = 25;
const tileSize = w / ncols;
const fRate = 10;
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
    mainSnake = new Snake((w / 2) , h / 2);
    mainSnake.move();
}

function draw() {
    // Reset background
    background(0);

    // Check if snake is in food
    if (mainSnake.coords[0] == mainFood.coords[0] & mainSnake.coords[1] == mainFood.coords[1]) {
        mainSnake.eat();

        // Create a new food
        mainFood = new Food();
    }

    // Draw food
    mainFood.draw();

    // Move snake
    mainSnake.move();
}

function keyPressed() {
    // Change snake direction (depending on key pressed)
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