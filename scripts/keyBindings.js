import {triggerCloseImagePopout} from "./image-closer.js";
import {MODULE_NAME} from "./constants.js";

export function registerKeys() {
    game.keybindings.register(MODULE_NAME, "ClosePlayerImgKey", {
        name: "Close Player Image Hotkey",
        hint: "The hotkey to close any art shown to players.",
        uneditable: [],
        editable: [{key: "`"}],
        onDown: triggerCloseImagePopout,
        onUp: () => {
        },
        restricted: true,
        precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL
    });

    console.log("damage-progress | Key bindings registered!");
}
