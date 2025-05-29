export function buildContainer(token) {
    const container = new PIXI.Container();
    container.setParent(token);
    container.sortableChildren = true;
    container['damage-progress'] = true;
    container.visible = true;
    return container;
}

export function buildPixiCircle(token, color) {
    let sprite = new PIXI.Graphics();
    updatePixiCircle(sprite, token, color);
    return sprite;
}

export function updatePixiCircle(sprite, token, color) {
    sprite.clear();
    sprite.moveTo(0, token.h);
    sprite.lineStyle(10, color, 1, 0.5);
    sprite.lineTo(token.w, token.h);
}
