function changeBGImage(){
    document.body.background = "../Assets/pixil-frame-0_3.png";
    var x = document.getElementById("play-menu");
    var l = document.getElementById("leaderboard");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
        else{
      x.style.display = "none";
      l.style.display = "block";
    }
    l.style.right = "0px";


}




(function () {
    var playArea = document.createElement('div'),
    player = document.createElement('div'),
    playerPos = {
        x:0,
        y:0
    },
    playerSpeed = 4,
    key = {
        right: false,
        left: false,
        up: false,
        down: false,
    },
    playerWidth = player.offsetWidth,
    playerHeight = player.offsetHeight;
} )();

document.body.appendChild(playArea);
playArea.classList.add('playArea');
document.body.appendChild(player);
player.classList.add('player');
playerPos.x = (playArea.offsetWidth / 2 + playArea.offsetLeft) - (player.offsetWidth / 2);
playerPos.y = (playArea.offsetHeight + playArea.offsetTop) - (player.offsetHeight * 2);
playArea.leftBoundary = playArea.offsetLeft + 10;
playArea.rightBoundary = (playArea.offsetLeft + playArea.offsetWidth -10) - player.offsetWidth;
playArea.topBoundary = playArea.offsetTop + 10;
playArea.bottomBoundary = (playArea.offsetTop + playArea.offsetHeight -10) - player.offsetHeight;

function keyDown(e) {
    if (e.keyCode === 39) {
        key.right = true;
    } else if (e.keyCode === 37) {
        key.left = true;
    }
    if (e.keyCode === 38) {
        key.up = true;
    } else if (e.keyCode === 40) {
        key.down = true;
    }
}

function keyUp(e) {
    if (e.keyCode === 39) {
        key.right = false;
    } else if (e.keyCode === 37) {
        key.left = false;
    }
    if (e.keyCode === 38) {
        key.up = false;
    } else if (e.keyCode === 40) {
        key.down = false;
    }
}

function movePlayer() {
    if (key.right === true) {
        playerPos.x += playerSpeed;
    } else if (key.left === true) {
        playerPos.x -= playerSpeed;
    }
    if (key.up === true) {
        playerPos.y -= playerSpeed;
    } else if (key.down === true) {
        playerPos.y += playerSpeed;
    }
    if (playerPos.x < playArea.leftBoundary) {
        playerPos.x = playArea.leftBoundary;
    }
    if (playerPos.x > playArea.rightBoundary) {
        playerPos.x = playArea.rightBoundary;
    }
    if (playerPos.y < playArea.topBoundary) {
        playerPos.y = playArea.topBoundary;
    }
    if (playerPos.y > playArea.bottomBoundary) {
        playerPos.y = playArea.bottomBoundary;
    }
    player.style.left = playerPos.x + 'px';
    player.style.top = playerPos.y + 'px';
}

document.addEventListener('keydown', keyDown, false);
document.addEventListener('keyup', keyUp, false);

function loop() {
    moveShip();
    setTimeout(loop, 1000 / 60);
}

loop();