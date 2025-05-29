import {getSocketHandler} from "./handlers.js";

export function triggerCloseImagePopout() {
    if(game.user.isGM === true){
        getSocketHandler().emitCloseImage();
        closeImagePopout();
    }
}

export function closeImagePopout() {
    let popout = document.querySelector(".image-popout button.fa-xmark")
        ?? document.querySelector(".journal-sheet button.fa-xmark");
    popout?.click();
}
