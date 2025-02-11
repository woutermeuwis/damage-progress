let damageBubbleStore = {};

export function getTokenHpSprite(tokenId) {
    if(tokenId in damageBubbleStore){
        return damageBubbleStore[tokenId];
    }
    return undefined;
}

export function setTokenHpSprite(tokenId, container) {
    damageBubbleStore[tokenId] = container;
}
