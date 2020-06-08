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
