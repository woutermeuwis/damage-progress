import {MySocketHandler} from "./socket-handler.js";
const moduleName = "damage-progress";

function getPackage() {
    return game.modules.get(moduleName);
}

export function registerHandlers() {
    getPackage().socketHandler = new MySocketHandler();
}

export function getSocketHandler() {
    return getPackage().socketHandler;
}
