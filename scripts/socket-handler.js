import {closeImagePopout} from "./image-closer.js";

const CLOSE_IMG_TYPE = "CLOSE-IMG";

export class MySocketHandler {
    constructor() {
        this.identifier = "module.damage-progress";
        this.registerSocketListeners();
    }

    registerSocketListeners() {
        game.socket.on(this.identifier, ({type, payload}) => {
            switch (type) {
                case CLOSE_IMG_TYPE:
                    this.handleCloseImage();
                    break;
                default:
                    throw new Error('unknown socket type');
            }
        })
    }

    emit(type, payload) {
        return game.socket.emit(this.identifier, {type, payload});
    }

    emitCloseImage() {
        return this.emit(CLOSE_IMG_TYPE);
    }

    handleCloseImage() {
        closeImagePopout();
    }
}
