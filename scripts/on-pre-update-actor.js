import {getColorFromValues} from "./colors.js";
import {isEmbeddedToken, getLinkedTokensOnCanvas, updateTokenTint} from "./token.js";

export function onPreUpdateActor(actor, updateData) {
    let newColor = getColorFromValues(updateData?.system?.attributes?.hp?.value, actor?.system?.attributes?.hp?.max);
    if(newColor === undefined)
        return;

    // update for unlinked tokens (Typically NPC's)
    if(isEmbeddedToken(actor?.parent))
        updateTokenTint(canvas, actor.parent.id, newColor);

    // update all linked tokens (typically PC's)
    getLinkedTokensOnCanvas(canvas, actor.id).forEach(token => {
        updateTokenTint(canvas, token.id, newColor)
    });
}
