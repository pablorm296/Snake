class Food {

    constructor() {
        // Set initial position
        const x = random(0, w - tileSize);
        const y = random(0, h - tileSize);
        const x_mapped = map(x, 0, w, 0, ncols);
        const y_mapped = map(y, 0, h, 0, nrows);
        this.x = floor(x_mapped) * tileSize;
        this.y = floor(y_mapped) * tileSize;
    }

    // get food coords
    get coords() {
        return [this.x, this.y];
    }

    // Draw
    draw() {
        noStroke();
        fill(46, 225, 70);
        rect(this.x, this.y, tileSize);
    }

}