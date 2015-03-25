class ParticleSystem extends Canvas {
    constructor(elem, amount = 1000) {
        super(elem);
        this.particles = [];
        this.amount = amount;

        this.velocity = 5;

        // range input element for amount of balls
        // and input for velocity
        this.init();
    }

    init() {

        this.setListeners();

        // set listeners on inputs
        this.createParticles();
        this.loop();
    }

    setListeners() {
        let range = getElem('velo');

        range.addEventListener('change',() =>{
            this.velocity = range.value;
            this.reset();
        },false);

        let amount = getElem('amount');

        amount.addEventListener('change', () => {
            this.amount = amount.value;

            console.log(this.amount);
            this.reset();

        }, false);
    }

    // restart the animations from scratch
    reset () {
        this.tick = 0;
        this.particles = [];
        this.createParticles();
        this.loop();
    }


    loop() {
        // clear the canvas
        super.clear();

        this.particles.forEach((particle) => {
            particle.update();

            particle.kill(this.canvasHeight, this.canvaWidth, this.canvasHeight / 2);

            particle.draw(this.context);

            this.createParticles();
        });


        window.requestAnimationFrame(this.loop.bind(this));
    }


    createParticles() {
        let particleLength = this.particles.length;


        if (this.tick % 10 === 0 && particleLength < this.amount) {
            let particle;
            this.particles.push(new Particle(randomNumBetween(5, 15)));

            particle = this.particles[particleLength];

            particle.x = this.canvasWidth / 2;
            particle.y = this.canvasHeight / 2;

            particle.xVelocity = randomNegativenumber(this.velocity, this.velocity * 2);
            particle.yVelocity = randomNegativenumber(this.velocity, this.velocity * 2);
        }

        this.tick++;
    }
}
