import {buildContainer, buildLowerLeftPixiCircle} from "./pixi.js";

export function updateTokenIndicator(canvas, token, color)
{
    drawTokenSprite(token, color);
    hideTokenHpBar(canvas, token);
}

function drawTokenSprite(token, color){
    const size = token.h / 20;
    const container = buildContainer(token);
    const circle = buildLowerLeftPixiCircle(token, color, size)
    container.addChild(circle);
    console.log("Update token " + token.id +" with color " + color);
}

function hideTokenHpBar(canvas, token){
    let tokenUpdate = {
        _id: token.id,
        "displayBars": CONST.TOKEN_DISPLAY_MODES.NONE
    }
    canvas.scene.updateEmbeddedDocuments('Token', [tokenUpdate]);
}
