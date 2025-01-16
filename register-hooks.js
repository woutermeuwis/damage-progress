import {onReady} from "./scripts/on-ready.js";
import {onPreUpdateActor} from "./scripts/on-pre-update-actor.js";
import {refreshTokenTint} from "./scripts/refresh-token-tint.js";

console.log("damage-progress | Registering hooks!");
Hooks.once("ready", ()=>{
    onReady();
    Hooks.on("preUpdateActor", onPreUpdateActor)
    Hooks.on("createToken",refreshTokenTint);
    Hooks.on("refreshToken", refreshTokenTint);
    console.log("damage-progress | Hooks registered!");
});

