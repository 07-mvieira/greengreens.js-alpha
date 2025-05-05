/* 
NÚMEROS CHAVE

escala original = 4.120390625
escala x4 = 1.03009765625

escala original = 4
escala x4 = 1

*/

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let keysDown = {}


const titleScreen = document.getElementById("title-screen");
const screenOne = document.getElementById("screen-1");
const screenTwo = document.getElementById("screen-2");
const screenThree = document.getElementById("screen-3");
const screenFour = document.getElementById("screen-4");
const screenFive = document.getElementById("screen-5");

const tile = document.getElementById("tile");

let currentScreen = screenOne;

/*let kirbyAnimations = [
    [idleRight], [idleLeft],
    [walkRight], [walkLeft],
    [jumpRight], [jumpLeft],
    [tumbleRight], [tumbleLeft],
    [hoverLiftRight], [hoverLiftLeft],
    [hoverRight], [hoverLeft],
    [hoverUpRight], [hoverUpLeft],
    [hoverSpitRight], [hoverSpitLeft],
    [crouchRight], [crouchLeft],
    [inhaleRight], [inhaleLeft],
    [fullIdleRight], [fullIdleLeft],
    [fullWalkRight], [fullWalkLeft],
    [swallowRight], [swallowLeft],
    [spitRight], [spitLeft],
    [warpStar], [die],
]*/

let kirbyAnimationIndex = 4;
let kirbyFacingLeft = false;
let kirbyFalling = true;
let kirbyPeakJumping = false;
let kirbyHovering = false
let kirbyFull = false
let kirbyHurt = false
let hp = 6
if (hp > 6){
    hp = 6
}
let score = 0

const canvasHeight = 512;
const canvasWidth = 640;
const tileSize = 64;
let distanceFromFloor = 3*tileSize;

let scrollX = 0;

let gameRunning = false;
let gameOver = false;

let screenOneTiling = [
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,99,],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,99,],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,99,],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,99,],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,2,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,99,],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,5,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,2,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,99,],
        [1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,99,],
        [1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,99,],
    ],
];
    
let currentScreenTiling = screenOneTiling;

let kirby = {
    spriteWidth: 64,
    spriteHeight: 64,
};

let drawTile = function(x, y, tileIndex) {
    let sx = (tileIndex*64) - (128*Math.floor(tileIndex/128)*64);
    let sy = Math.floor(tileIndex/128)*64;
    context.drawImage(tile, sx, sy, 64, 64, x, y, 64, 64);
}
var drawLevelTiles = function(level, hTiles, vTiles, scrollX) {
    for (var i=0; i<hTiles; i++) {
        for (var j=0; j<vTiles; j++) {
            if (level[j][i] == 1) {
                drawTile(64*i-scrollX, j*64, 18+64*3);
            }
        }
    }
}

context.drawImage(screenOne, 0, 0, 640, 512, 0, 0, 300, 150)

let FPS = 60;
let interval = 1 / FPS;
let frameCounter = 0;
let oldTime = Date.now();
let previousFrameTime = oldTime;