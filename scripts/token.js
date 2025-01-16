export function isEmbeddedToken(obj){
    return obj?.isEmbedded && obj?.documentName === "Token";
}

export function getLinkedTokensOnCanvas(canvas, id) {
    return canvas.tokens.placeables.filter(token => token.document.actorId == id && token.document.actorLink);
}

export function updateTokenTint(canvas, id, color){
    let options = [{
        "texture.tint": color,
        _id: id
    }]
    canvas.scene.updateEmbeddedDocuments(Token.embeddedName, options);

    console.log("damage-progress | set token " + id + " | Tint: " + color);
}
