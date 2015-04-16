class Particle {
    constructor(rad = 40) {
        this.radius = rad;
        this.x = 0;
        this.y = 0;
        this.color = randomColor();
        this.xVelocity = 0;
        this.yVelocity = 0;
    }

    draw (context) {
        context.save();

        context.translate(this.x, this.y);
        context.fillStyle = this.color;

        context.beginPath();
        context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
        context.closePath();

        // fill the color
        context.fill();

        context.restore();
    }

    update () {
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }

    kill (height, width, postition = 0, velocity = 10) {
        if(this.y > height || this.y < 0 || this.x > width || this.x < 0) {
            this.y = postition;
            this.x = postition;
            // set random direction
            this.xVelocity = randomNegativenumber(velocity, velocity * 1.5);;
            this.yVelocity = randomNegativenumber(velocity, velocity * 1.5);;
        }
    }
}
