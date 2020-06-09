class Food {

    constructor() {
        // Set initial position
        this.x = random(0 + tileSize, w - tileSize);
        this.y = random(0 + tileSize, h - tileSize);
    }

    get coords() {
        return [this.x, this.y];
    }

    // Draw
    draw() {
        noStroke();
        fill(46, 225, 70);
        circle(this.x, this.y, tileSize);
    }

}