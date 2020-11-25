function changeBGImage(){
    var x = document.getElementById("play-menu");
    var l = document.getElementById("leaderboard");
    var c = document.getElementById("playArea");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
        else{
      x.style.display = "none";
      l.style.display = "block";
      c.style.display = "block";
    }
    l.style.right = "0px";


}

document.body.appendChild(playArea);
playArea.classList.add('playArea');
playArea.appendChild(player);
player.classList.add('player');
playerPos.x = (playArea.offsetWidth / 2) - (player.offsetWidth / 2);
playerPos.y = playArea.offsetHeight - (player.offsetHeight * 2);
playArea.leftBoundary = 0;
playArea.rightBoundary = playArea.offsetWidth - player.offsetWidth - 20;
playArea.topBoundary = 0;
playArea.bottomBoundary = playArea.offsetHeight - player.offsetHeight - 20;
guns = [],
gunsSpeed = 4,
max_guns = 5


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
})();




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

    if (e.keyCode === 88) {
        if (guns.length < max_guns) {
            var guns = gun();
            guns.push([gun, playerPos.y]);
            playArea.appendChild(guns[guns.length - 1][0]);
            guns[guns.length - 1][0].classList.add('gun');
            guns[guns.length - 1][0].style.top = guns[guns.length - 1][1] + 'px';
            guns[guns.length - 1][0].style.left = playerPos.x + 25 + 'px';
        }
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

function gun() {
    return document.createElement('div');
}

function moveGun() {
    for (var i = 0; i < guns.length; i++) {
        guns[i][1] -= gunsSpeed;
        guns[i][0].style.top = guns[i][1] + 'px';
        if (parseInt(guns[i][0].style.top) < playArea.topBoundary) {
            playArea.removeChild(guns[i][0]);
            guns.splice(i, 1);
        }
    }
}

    element.addEventListener("keydown", keyDown, false);
    element.addEventListener("keyup", keyUp, false);



function loop() {
    movePlayer();
    moveGun();
    setTimeout(loop, 1000 / 60);
}

loop();