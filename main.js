const w = 500;
const h = w;
const size = 50;
const tileSize = w / size;
const fRate = 20;
const nFood = size;
var alive = true;
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

    // Place food
    mainFood = new Food(nFood);
    console.log(mainFood);


    // Create new snake
    mainSnake = new Snake(w / 2, h / 2);
    mainSnake.draw();
    mainFood.draw();
}

function draw() {
    // Reset background
    background(0);

    // Draw snake
    mainSnake.draw();

    mainFood.draw();
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