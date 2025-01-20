export function buildContainer(token){
    const container = new PIXI.Container();
    container.setParent(token);
    container.sortableChildren = true;
    container['damage-progress'] = true;
    container.visible = true;
    return container;
}

export function buildUpperLeftPixiCircle(token, color, radius)
{
    return buildPixiCircle(color, radius,radius,radius);
}

export function buildLowerLeftPixiCircle(token, color, radius)
{
    return buildPixiCircle(color, radius,token.h-radius, radius);
}

export function buildPixiCircle(color, x, y, radius){
    let sprite = new PIXI.Graphics();
    sprite.beginFill(color);
    sprite.drawCircle(x,y,radius);
    sprite.endFill();
    return sprite;
}
