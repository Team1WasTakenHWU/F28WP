window.onload = function () {
    ctx = document.getElementById('game').getContext("2d");
    requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans-serif";
};




function changeBGImage() {
    document.body.background = "../Assets/pixil-frame-0_3.png";
    var x = document.getElementById("play-menu");
    var l = document.getElementById("leaderboard");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
        l.style.display = "block";
    }
    l.style.right = "0px";
}

function movement(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.moveAngle = 0;
    this.speed = 0;
    this.x = x;
    this.y = y;

    this.update = function () {
        ctx = gameMap.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillstyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();
    }
    this.newPos = function () {
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }
}


var ctx = null;
function startGame() {
    var gameMap = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 1, 0, 0, 0, 1, 1, 0,
        0, 1, 0, 1, 0, 1, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
        0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
    var tileW = 40, tileH = 40;
    var mapW = 10, mapH = 10;
    var currentSecond = 0, frameCount = 0, framesLastSecond = 0;

    window.addEventListener('keydown', function (e) {
        e.preventDefault();
        drawGame.keys = (myGameArea.keys || []);
        drawGame.keys[e.keyCode] = (e.type == "keydown");

        window.addEventListener('keyup', function (e) {
            drawGame.keys[e.keyCode] = (e.type == "keydown");
        });
    });

    function drawGame() {

        if (ctx == null) { return; }

        var sec = Math.floor(Date.now() / 1000);
        if (sec != currentSecond) {
            currentSecond = sec;
            framesLastSecond = frameCount;
            frameCount = 1;
        }
        else { frameCount++; }

        for (var y = 0; y < mapH; ++y) {
            for (var x = 0; x < mapW; ++x) {
                switch (gameMap[((ymapW) + x)]) {
                    case 0:
                        ctx.fillStyle = "#685b48";
                        break;
                    default:
                        ctx.fillStyle = "#5aa457";
                }

                ctx.fillRect(xtileW, y * tileH, tileW, tileH);
            }
        }

        ctx.fillStyle = "#ff0000";
        ctx.fillText("FPS: " + framesLastSecond, 10, 20);

        requestAnimationFrame(drawGame);

    }
}


