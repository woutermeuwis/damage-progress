import {getHighHpColor, getLowHpColor, getMidHpColor} from "./settings.js";

export function getColorFromValues(newHp, maxHp) {
    if (!validateHp(newHp) || !validateHp(maxHp))
        return undefined;
    return getColorFromPercentage(newHp / maxHp);
}

export function getColorFromPercentage(percent) {
    if (isNaN(percent) || percent > 1.0)
        return '#FFFFFF';

    const lowColor = percent > 0.5 ? getMidHpColor() : getLowHpColor();
    const highColor = percent > 0.5 ? getHighHpColor() : getMidHpColor();

    let gradientPercentage = 2 * percent;
    if (gradientPercentage > 1.0)
        gradientPercentage -= 1;

    return getGradientColor(lowColor, highColor, gradientPercentage);
}

function getGradientColor(lowColor, highColor, gradientPercentage) {
    let low = toRgb(lowColor);
    let high = toRgb(highColor);
    let red = toHex(getGradientColorFragment(low.red, high.red, gradientPercentage));
    let green = toHex(getGradientColorFragment(low.green, high.green, gradientPercentage));
    let blue = toHex(getGradientColorFragment(low.blue, high.blue, gradientPercentage));
    return "#" + red + green + blue;
}

function getGradientColorFragment(start, end, grad) {
    return (end - start) * grad + start;
}

function toHex(value) {
    if (isNaN(value))
        return "00";

    const number = parseInt(value);
    const limited = Math.min(Math.max(0, number), 255);
    return limited.toString(16).padStart(2, "0");
}

function toRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(hex);
    return result
        ? {
            red: parseInt(result[1], 16),
            green: parseInt(result[2], 16),
            blue: parseInt(result[3], 16)
        }
        : {red: 255, green: 255, blue: 255};
}

function validateHp(hp){
    return hp != null && !isNaN(hp);
}
