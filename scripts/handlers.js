import {MySocketHandler} from "./socket-handler.js";
import {MODULE_NAME} from "./constants.js";

function getPackage() {
    return game.modules.get(MODULE_NAME);
}

export function registerHandlers() {
    getPackage().socketHandler = new MySocketHandler();
}

export function getSocketHandler() {
    return getPackage().socketHandler;
}
