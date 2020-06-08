const w = 500;
const h = w;
const size = 50;
const tileSize = w / size;
const fRate = 20;
const nFood = size;
var alive = true;
var mainSnake;
var mainFood;

class Food {

    constructor(n) {

        class FoodItem {
            // Constructor
            constructor() {
                // Get two random numbers
                this.x = int(random(0 + tileSize, w - tileSize));
                this.y = int(random(0 + tileSize, h - tileSize));
            }
            // Getter
            get coords() {
                return [this.x, this.y];
            }
            // Draw
            draw() {
                circle(this.x, this.y, tileSize);
            }
        }

        this.Items = [];
        this.n = n;

        // Generate 
        while (this.Items.length < n) {
            // New point
            const tmp_food = new FoodItem();
            // If first, don't comapre
            if (this.Items.length == 0) {
                this.Items.push(tmp_food);
                continue;
            }
            // Compare with existing values
            for (let i = 0; i < this.Items.length; i++) {
                const target_x = this.Items[i].coords[0];
                const target_y = this.Items[i].coords[1];
                const distance = sqrt(sq(tmp_food.coords[0] - target_x) + sq(tmp_food.coords[1] - target_y))
                // If distance is less than 2 times tile size, then break
                if (distance > tileSize * 2) {
                    this.Items.push(tmp_food);
                    break;
                }
            }
        }

    }

    // Draw
    draw() {
        // Loop through elements and invoque draw method
        for (let index = 0; index < this.Items; index++) {
            this.Items[index].draw();
            console.log(this.Items[index]);

        }
    }

}

class Snake {

    constructor(initialX, initialY) {
        this.x = initialX;
        this.y = initialY;
        this.direction = "none";
    }

    draw() {
        // Check if out of boundaries
        if (this.x + (tileSize / 2) > w || this.x - (tileSize / 2) < 0) {
            alive = false;
            return false;
        }

        if (this.y + (tileSize / 2) > h || this.y - (tileSize / 2) < 0) {
            alive = false;
            return false;
        }

        noStroke();
        fill(255);
        rect(this.x, this.y, tileSize);

        // If direction is none, return
        if (this.direction == "none") {
            return true;
        }
        // If direction is up, move up (y-)
        if (this.direction == "up") {
            this.y -= tileSize;
        }
        // If direction is left, move left (x-)
        if (this.direction == "left") {
            this.x -= tileSize;
        }
        // If direction is right, move left (x+)
        if (this.direction == "right") {
            this.x += tileSize;
        }
        // If direction is down, move down (y+)
        if (this.direction == "down") {
            this.y += tileSize;
        }
    }

    setDir(direction) {
        // If direction is up, move up (y-)
        if (direction == "up") {
            if (this.direction == "down") {
                return false;
            }
        }
        // If direction is left, move left (x-)
        if (direction == "left") {
            if (this.direction == "right") {
                return false;
            }
        }
        // If direction is right, move left (x+)
        if (direction == "right") {
            if (this.direction == "left") {
                return false;
            }
        }
        // If direction is down, move down (y+)
        if (direction == "down") {
            if (this.direction == "up") {
                return false;
            }
        }
        this.direction = direction;
    }
}

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