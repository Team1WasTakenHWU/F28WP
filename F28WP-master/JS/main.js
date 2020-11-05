
var x ;
function changeBGImage(){
     document.body.background = "../Assets/pixil-frame-0_3.png","../Assets/pixil-frame-0_4.png";
    var x = document.getElementById("play-menu")
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
    }

function showPlayer(){
    var y = document.getElementById("game-canvas")
    var playerImage = new Image(150, 150);
    playerImage.src = "../Assets/guy.png";
    if (x.style.display === "block") {
    playerImage.display.display = "block";
}
    else {
    playerImage.style.display ="none";
}
}

function setTop() {
    window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
}


