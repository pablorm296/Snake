class Snake {

    constructor(initialX, initialY) {
        // Set initial position
        this.x = initialX;
        this.y = initialY;
        this.alive = true;
        // Direction is none (snake does not move)
        this.direction = "none";
    }

    draw() {
        // Check if out of boundaries
        if (this.x + tileSize > w || this.x - tileSize < 0) {
            // Kill snake
            this.alive = false;
            // Set direction to none (snake does not move)
            this.direction = "none";
        }

        if (this.y + tileSize > h || this.y - tileSize < 0) {
            // Kill snake
            this.alive = false;
            // Set direction to none (snake does not move)
            this.direction = "none";
        }

        // Draw snake
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
        this.direction = direction;
    }
}