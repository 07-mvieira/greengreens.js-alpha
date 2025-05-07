const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let keysDown = {}


const titleScreen = {
    vis: document.getElementById("title-screen")
}

const screenOne = {
    vis: document.getElementById("screen-1"),
    tiling: [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,2,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,5,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,2,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,],
            [1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,],
            [1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,],
        ],
}
const screenTwo = {
    vis: document.getElementById("screen-2"),
}
const screenThree = {
    vis: document.getElementById("screen-3"),
}
const screenFour = {
    vis: document.getElementById("screen-4"),
}
const screenFive = {
    vis: document.getElementById("screen-2"),
}

const tile = document.getElementById("tile");

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
let score = 0

const canvasWidth = 640;
const canvasHeight = 512;
const tileSize = 64;
let distanceFromFloor = 3*tileSize;

let scrollX = 0;

let gameRunning = false;
let gameOver = false;

let kirby = {
    entityWidth: 64,
    entityHeight: 64,
    spriteWidth: 96,
    spriteHeight: 96,
    levelX: 192,
    levelY: 512-256-64, // altura da tela-4 tiles acima da linha inferior-altura (?????)
    renderX: 64,
    renderY: 512-256-64,
    velocityY: 0
};

let drawTile = function(x, y) {
    context.drawImage(tile, x, y, 64, 64); // desenha tiles invisíveis de 64x64
}

let drawScreenTiles = function(screen, hTiles, vTiles, scrollX) {
    for (let i=0; i<hTiles; i++) { // definição para os tiles horizontais
        for (let j=0; j<vTiles; j++) { // definição para os tiles verticais
            if (screen[j][i] == 1 || screen[j][i] == 5) {
                drawTile(64*i-scrollX, j*64);
            }
        }
    }
}

var checkentityTileCollision = function(entity, tileX, tileY, collisions) {
    if ((entity.levelX + entity.entityWidth >= tileX &&
        entity.levelX <= tileX + TILE_SIZE) && 
        (entity.levelY + entity.entityHeight >= tileY &&
            entity.levelY <= tileY + TILE_SIZE)) {
                let intersect = {
                    x: Math.max(entity.levelX,tileX),
                    y: Math.max(entity.levelY,tileY),
                }
                intersect.width = Math.min(entity.levelX + entity.entityWidth, 
                    tileX + TILE_SIZE) - intersect.x;
                intersect.height = Math.min(entity.levelY + entity.entityHeight, 
                    tileY + TILE_SIZE) - intersect.y;
                if (entity.levelX+entity.entityWidth/2 > tileX+TILE_SIZE/2 && 
                    intersect.height > intersect.width) collisions.left = true;
                if (entity.levelX+entity.entityWidth/2 < tileX+TILE_SIZE/2 && 
                    intersect.height > intersect.width) collisions.right = true;
                if (entity.levelY+entity.entityHeight/2 < tileY+TILE_SIZE/2 && 
                    intersect.width > intersect.height && intersect.width > 4) {
                    collisions.top = true;
                    collisions.topY = tileY;
                }
                if (entity.levelY+entity.entityHeight/2 > tileY+TILE_SIZE/2 && 
                    intersect.width > intersect.height && intersect.width > 4) {
                        collisions.bottom = true;
                }
        }
}

context.drawImage(screenOne.vis, 0, 0, 640, 512, 0, 0, 300, 150)

let resetGame = function() {
    kirby = {
        entityWidth: 64,
        entityHeight: 64,
        spriteWidth: 96,
        spriteHeight: 96,
        levelX: 192,
        levelY: 512-256-64,
        renderX: 64,
        renderY: 512-256-64,
        velocityY: 0
    }
    
    currentScreen = JSON.parse(JSON.stringify(screenOne.tiling[0]));
}

let gameLoop = function(interval) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (kirby.levelX + kirby.entityWidth/2 >= canvasWidth/2 && 
        scrollX+canvasWidth < currentScreen[0].length*tileSize ||
        (kirby.levelX + canvasWidth/2 + kirby.entityWidth/2 <= 
        currentScreen[0].length*canvasWidth && scrollX > 0)) {
        scrollX = kirby.levelX - canvasWidth/2 + kirby.entityWidth/2;
    }

    if (kirby.levelY + kirby.entityHeight/2 >= canvasHeight/2 && 
        scrollX+canvasHeight < currentScreen[0].length*tileSize ||
        (kirby.levelX + canvasHeight/2 + kirby.entityWidth/2 <= 
        currentScreen[0].length*canvasHeight && scrollX > 0)) {
        scrollX = kirby.levelX - canvasHeight/2 + kirby.entityWidth/2;
    }

    hero.renderX = hero.levelX - scrollX;
    hero.renderY = hero.levelY;

    drawScreenTiles(currentScreen, currentScreen[0].length, currentScreen.length, scrollX);
}

currentLevel = JSON.parse(JSON.stringify(screenOne.tiling[0]));

let FPS = 60;
let interval = 1 / FPS;
let frameCounter = 0;
let oldTime = Date.now();
let previousFrameTime = oldTime;