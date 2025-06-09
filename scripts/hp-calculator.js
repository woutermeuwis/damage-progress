import {getHpCalcMode, getHpFactor, isHpCalcEnabled} from "./settings.js";
import {MAX} from "./constants.js";


export async function calculateTokenHp(tokenDoc){
    // ensure function is enabled
    if(!isHpCalcEnabled())
        return;

    // ensure token has an actor object, but is not linked to it
    // this excludes pc's, important npc's and tokens without actor
    if(!tokenDoc.actor || tokenDoc.actorLink)
        return;


    const formula = tokenDoc.actor.system.attributes.hp.formula.replace(" ", "");
    const hp = (await new Roll(formula).evaluate({maximize: getHpCalcMode() === MAX})).total * getHpFactor();

    tokenDoc.actor.update({
        'system.attributes.hp': { value: hp, max: hp}
    });
}
