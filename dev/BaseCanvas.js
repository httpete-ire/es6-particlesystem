class BaseCanvas {

    constructor(elem) {
        this.canvas = getElem(elem);
        this.context = this.canvas.getContext('2d');
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.tick = 0;
    };

    clear() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
}
