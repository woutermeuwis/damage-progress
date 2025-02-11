import {buildContainer, buildPixiCircle, updatePixiCircle} from "./pixi.js";
import {getTokenHpSprite, setTokenHpSprite} from "./data-store.js";

export function updateTokenIndicator(canvas, token, color)
{
    drawTokenSprite(token, color);
    hideTokenHpBar(canvas, token);
}

function drawTokenSprite(token, color){
    const radius = token.h / 20;

    let sprite = getTokenHpSprite(token.id);
    if(sprite === undefined){
        const container = buildContainer(token);
        sprite = buildPixiCircle(token, color)
        container.addChild(sprite);
        setTokenHpSprite(token.id, sprite);
    }
    else{
        updatePixiCircle(sprite, token, color)
    }
}

function hideTokenHpBar(canvas, token){
    let tokenUpdate = {
        _id: token.id,
        "displayBars": CONST.TOKEN_DISPLAY_MODES.NONE
    }
    canvas.scene.updateEmbeddedDocuments('Token', [tokenUpdate]);
}
