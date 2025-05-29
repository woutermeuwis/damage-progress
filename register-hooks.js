import {refreshTokenTint} from "./scripts/refresh-token-tint.js";
import {clearHpSprites} from "./scripts/data-store.js";;
import {initSettings} from "./scripts/settings.js";
import {registerKeys} from "./scripts/keyBindings.js";
import {registerHandlers} from "./scripts/handlers.js";

console.log("damage-progress | Registering hooks!");

Hooks.once("init", () => {
    registerHandlers();
    registerKeys();
});

Hooks.once("ready", () => {
    Hooks.on("refreshToken", refreshTokenTint);
    Hooks.on("tearDownTokenLayer", layer => clearHpSprites())

    initSettings();

    console.log("damage-progress | Hooks registered!");
});
