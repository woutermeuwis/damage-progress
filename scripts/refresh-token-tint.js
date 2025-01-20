import {getColorFromValues} from "./colors.js";
import {updateTokenTint} from "./token.js";

export function refreshTokenTint(token) {
    let hp = token?.actor?.system?.attributes?.hp;
    let newColor = getColorFromValues(hp.value, hp.max);
    if(newColor === undefined || newColor === token?.mesh?.tint?.css)
        return;

    updateTokenTint(canvas, token.id, newColor);
}
