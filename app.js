async function init(){
kaboom({
    global: true,  // Define que as variáveis e funções serão globais
    canvas: document.querySelector("canvas"),  // Define o canvas onde o jogo será renderizado
    height: 527.41,
    width: 658.89,
    scale: 1,  // Escala da tela (não há escalamento)
});
    let bgImage = await loadSprite("background", "assets\backgrounds\screen-1.png");

    let background = add([
        sprite("background"),
        // Make the background centered on the screen
        pos(width() / 2, height() / 2),
        origin("center"),
        // Allow the background to be scaled
        scale(1),
        // Keep the background position fixed even when the camera moves
        fixed()
      ]);
      // Scale the background to cover the screen
      background.scaleTo(Math.max(
        width() / bgImage.tex.width,
        height() / bgImage.tex.height
      ));
};

init();