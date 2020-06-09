class Snake {

    constructor(initialX, initialY) {
        // Set initial position
        this.x = initialX;
        this.y = initialY;
        this.alive = true;
        // Direction is none (snake does not move)
        this.direction = "none";
    }

    // Method to get head hoords
    get coords () {
        return [this.x, this.y];
    }
    // Method to draw snake
    draw() {
        noStroke();
        fill(255);
        rect(this.x, this.y, tileSize);
    }
    // Method to move snake
    move() {
        // Check if out of boundaries
        if (this.x + tileSize >= w || this.x <= 0) {
            // Kill snake
            this.alive = false;
            // Set direction to none (snake does not move)
            this.direction = "none";
            // Get constrained version of coordinate
            this.x = constrain(this.x, 0, w - tileSize);
        }

        if (this.y + tileSize >= h || this.y <= 0) {
            // Kill snake
            this.alive = false;
            // Set direction to none (snake does not move)
            this.direction = "none";
            // Get constrained version of coordinate
            this.y = constrain(this.y, 0, h - tileSize);
        }

        // If direction is up, move up (y-)
        if (this.direction == "up") {
            this.y -= tileSize;
            this.draw();
        }
        // If direction is left, move left (x-)
        if (this.direction == "left") {
            this.x -= tileSize;
            this.draw();
        }
        // If direction is right, move left (x+)
        if (this.direction == "right") {
            this.x += tileSize;
            this.draw();
        }
        // If direction is down, move down (y+)
        if (this.direction == "down") {
            this.y += tileSize;
            this.draw();
        }
        // If direction is none, return
        if (this.direction == "none") {
            this.draw();
        }
    }
    // Method to change snake direction
    setDir(direction) {
        // If direction is up, move up (y-)
        // Can't move down
        if (direction == "up") {
            if (this.direction == "down") {
                return false;
            }
        }
        // If direction is left, move left (x-)
        // Can't move right
        if (direction == "left") {
            if (this.direction == "right") {
                return false;
            }
        }
        // If direction is right, move left (x+)
        // Can't move left
        if (direction == "right") {
            if (this.direction == "left") {
                return false;
            }
        }
        // If direction is down, move down (y+)
        // Can't move up
        if (direction == "down") {
            if (this.direction == "up") {
                return false;
            }
        }
        // Change direction
        this.direction = direction;
    }
}