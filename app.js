let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

drawSceneOne();

function drawSceneOne(){
    let sceneOne = new Image()
    sceneOne.src = 'assets/backgrounds/screen-1.png';
    sceneOne.onload = function(){
        ctx.drawImage(sceneOne, 0, 0, 1758, 128);
    }
}