/* 
NÚMEROS CHAVE

escala original = 4.120390625
escala x4 = 1.03009765625

*/

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const screenOne = document.getElementById("screen-1");
const screenTwo = document.getElementById("screen-2");
const screenThree = document.getElementById("screen-3");
const screenFour = document.getElementById("screen-4");
const screenFive = document.getElementById("screen-5");

let currentScreen = screenOne;

let kirbyAnimations = [
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
]

let kirbyAnimationIndex = 4;
let kirbyfacingLeft = false;


const canvasHeight = 527.41;
const canvasWidth = 658.89;
const tileSize = 65.92625;

let kirby = {
    spriteWidth: 65.92625,
    spriteHeight: 65.92625,
};

let screenOneTiling = [
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,99,],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,99,],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,99,],
        [0,0,k,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,99,],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,2,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,99,],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,5,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,2,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,99,],
        [1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,99,],
        [1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,99,],
    ],
];
    context.drawImage(screenOne, 0, 0, canvasWidth, canvasHeight)

let FPS = 60;
let interval = 1 / FPS;
let frameCounter = 0;
let oldTime = Date.now();
let previousFrameTime = oldTime;