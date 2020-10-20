var player;
function Start() {
    gameArea.start();
    player = new GameObject(30, 30, 120, 230, "blue");
}

function GameObject(width, height, xPos, YPos, colour) {
    this.width = width;
    this.height = height;
    this.xPos = xPos;
    this.YPos = YPos;
    context = gameArea.contex;
    context.fillStyle = colour;
    context.fillRect = (this.xPos, this.YPos, this.width, this.height);
}

var gameArea = {
    canvas: document.createElement("canvas"), //create the canvas //canvas is used to draw stuff essentially
    start: function () {
        this.canvas.width = 480; //set width
        this.canvas.height = 360;   //set height
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
    }

}