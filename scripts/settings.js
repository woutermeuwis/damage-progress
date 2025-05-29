export function initSettings() {
    game.settings.register("damage-progress", "HighHpColor", {
        name: "High HP Color",
        hint: "The color to tint tokens at high hp",
        scope: "world",
        config: true,
        type: String,
        default: '#D4FC0A'
    });

    game.settings.register("damage-progress", "MidHpColor", {
        name: "Mid HP Color",
        hint: "The color to tint tokens at mid hp",
        scope: "world",
        config: true,
        type: String,
        default: '#FCAB0A'
    });

    game.settings.register("damage-progress", "LowHpColor", {
        name: "Low HP Color",
        hint: "The color to tint tokens at low hp",
        scope: "world",
        config: true,
        type: String,
        default: '#FC320A'
    });
    console.log("damage-progress | Settings registered!");
}

export function getHighHpColor() {
    return game.settings.get("damage-progress", "HighHpColor");
}

export function getMidHpColor() {
    return game.settings.get("damage-progress", "MidHpColor");
}

export function getLowHpColor() {
    return game.settings.get("damage-progress", "LowHpColor");
}

export function getCloseImagesKey() {
    return game.settings.get("damage-progress", "ClosePlayerImgKey");
}
