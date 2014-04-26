var G = {
    game: null,
    width: 800, /* stage width in pixels */
    height: 450, /* stage height in pixels */

    sfx: {}, /* sound effects */

    message: null,
    tutorial: {},

    backgroundColor: 0x4488cc,
    mainFont: '"Luckiest Guy"'
};

G.setupStage = function() {
    G.game.stage.backgroundColor = G.backgroundColor;
};

G.addRectangle = function(color) {
    var rect = G.game.add.graphics(0, 0);
    rect.beginFill(color, 1);
    rect.drawRect(0, 0, G.game.width, G.game.height);
    rect.endFill();

    return rect;
};

G.fadeIn = function(length, color, delay) {
    if (delay === undefined) delay = 0;
    if (color === undefined) color = 0x000000;
    if (length === undefined) length = 500;

    var curtain = G.addRectangle(color);
    curtain.alpha = 1;
    G.game.add.tween(curtain).to({ alpha: 0 }, length, Phaser.Easing.Quadratic.In, true, delay);
};

G.fadeOut = function(length, color, delay) {
    if (delay === undefined) delay = 0;
    if (color === undefined) color = 0x000000;
    if (length === undefined) length = 500;

    var curtain = G.addRectangle(color);
    curtain.alpha = 0;
    G.game.add.tween(curtain).to({ alpha: 1 }, length, Phaser.Easing.Quadratic.In, true, delay);
};

G.showTutorial = function(flag, message) {
    if (G.tutorial[flag] === undefined && G.message.getQueueLength() === 0) {
        G.tutorial[flag] = true;
        G.message.add(message);
    }
};

G.shake = function() {
    var tx = G.game.camera.x + 30;
    var ty = G.game.camera.y + 30;

    var tween;
    tween = G.game.add.tween(G.game.camera)
        .to({ x: tx }, 40, Phaser.Easing.Sinusoidal.InOut, false, 0, 3, true)
        .start();

    tween = G.game.add.tween(G.game.camera)
        .to({ y: ty }, 80, Phaser.Easing.Sinusoidal.InOut, false, 0, 3, true)
        .start();
};
