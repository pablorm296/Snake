class Snake {

    constructor(initialX, initialY) {
        // Set initial position
        const x_mapped = map(initialX, 0, w, 0, ncols);
        const y_mapped = map(initialY, 0, h, 0, nrows);
        this.x = floor(x_mapped) * tileSize;
        this.y = floor(y_mapped) * tileSize;
        this.alive = true;
        // Init sound generator
        this.voice = new p5.MonoSynth();
        this.note = 400;
        // Direction is none (snake does not move)
        this.direction = "none";
        // Init body array
        this.body = [];
    }

    // Method to get head hoords
    get coords() {
        return [this.x, this.y];
    }
    // Method to draw snake
    draw() {
        // First, draw the head
        noStroke();
        fill(255);
        rect(this.x, this.y, tileSize);

        // Then, if body is > 0, draw each element of the boy
        if (this.body.length > 0) {
            for (let index = this.body.length - 1; index >= 0; index--) {
                // Get body element
                const element = this.body[index];
                // Map body element index to a [0, 255] value
                var color = map(index, 0, this.body.length - 1, 0, 255);
                if (this.body.length == 1) {
                    color = 0;
                }
                // Use a green gradient
                fill(color, 255, color);
                rect(element[0], element[1], tileSize);
            }
        }

        // If body is > 0, shift elements and push to end head position
        if (this.body.length > 0) {
            this.body.shift(0);
            this.body.push([this.x, this.y]);
        }

    }
    // Method to move snake
    move() {
        // Check if out of boundaries
        if (this.x + tileSize > w) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = w;
        }
        if (this.y + tileSize > h) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = h;
        }

        // If direction is up, move up (y-)
        if (this.direction == "up") {
            this.draw();
            this.y -= tileSize;
        }
        // If direction is left, move left (x-)
        if (this.direction == "left") {
            this.draw();
            this.x -= tileSize;
        }
        // If direction is right, move left (x+)
        if (this.direction == "right") {
            this.draw();
            this.x += tileSize;
        }
        // If direction is down, move down (y+)
        if (this.direction == "down") {
            this.draw();
            this.y += tileSize;
        }
        // If direction is none, return
        if (this.direction == "none") {
            this.draw();
        }


        // Check if head collided with body
        for (let index = 0; index < this.body.length; index++) {
            const bodyPart = this.body[index];
            if (bodyPart[0] == this.coords[0] && bodyPart[1] == this.coords[1]) {
                // Player died
                alert(`Ups! La serpiente no se puede comer a sí misma. Obtuviste ${score} puntos.`);
            }
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
    // Method to eat
    eat() {
        // Make sound
        this.voice.play(this.note);
        // Push food position to body
        this.body.push([this.x, this.y]);
        // Add to score
        score = score + fRate
        // Change note and framerate
        fRate = fRate * (1 + dificulty);
        frameRate(fRate);
        this.note = this.note * (1 + dificulty);
    }
}