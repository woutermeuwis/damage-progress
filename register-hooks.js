import {onReady} from "./scripts/on-ready.js";
import {refreshTokenTint} from "./scripts/refresh-token-tint.js";
import {clearHpSprites} from "./scripts/data-store.js";

console.log("damage-progress | Registering hooks!");
Hooks.once("ready", ()=>{
    onReady();
    Hooks.on("refreshToken", refreshTokenTint);
    Hooks.on("tearDownTokenLayer", layer =>clearHpSprites())
    console.log("damage-progress | Hooks registered!");
});
