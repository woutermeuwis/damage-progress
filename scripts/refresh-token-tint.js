import {getColorFromValues} from "./colors.js";
import {updateTokenIndicator} from "./token.js";

export function refreshTokenTint(token) {
    let hp = token?.actor?.system?.attributes?.hp;
    let newColor = getColorFromValues(hp?.value, hp?.max);
    if(!newColor || newColor === token?.mesh?.tint?.css)
        return;

    updateTokenIndicator(canvas, token, newColor);
}
