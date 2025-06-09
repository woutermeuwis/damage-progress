import {ENABLE_TOKEN_HP_CALC, HIGH_HP_COLOR, LOW_HP_COLOR, MAX, MID_HP_COLOR, MODULE_NAME, RANDOM, TOKEN_HP_FACTOR, TOKEN_HP_MODE} from "./constants.js";

export function initSettings() {
    game.settings.register(MODULE_NAME, HIGH_HP_COLOR, {
        name: "High HP Color",
        hint: "The color to tint tokens at high hp",
        scope: "world",
        config: true,
        type: new foundry.data.fields.StringField(),
        default: '#D4FC0A'
    });

    game.settings.register(MODULE_NAME, MID_HP_COLOR, {
        name: "Mid HP Color",
        hint: "The color to tint tokens at mid hp",
        scope: "world",
        config: true,
        type: new foundry.data.fields.StringField(),
        default: '#FCAB0A'
    });

    game.settings.register(MODULE_NAME, LOW_HP_COLOR, {
        name: "Low HP Color",
        hint: "The color to tint tokens at low hp",
        scope: "world",
        config: true,
        type: new foundry.data.fields.StringField(),
        default: '#FC320A'
    });

    game.settings.register(MODULE_NAME, ENABLE_TOKEN_HP_CALC, {
        name: "Enable Token Hp Calculator",
        hint: "If enabled, all new tokens have their hp calculated when dropped on the canvas",
        scope: "world",
        config: true,
        type: new foundry.data.fields.BooleanField(),
        default: true
    });

    game.settings.register(MODULE_NAME, TOKEN_HP_MODE, {
        name: "Token Hp mode",
        hint: "Determines how hp is calculated for new tokens",
        scope: "world",
        config: true,
        default: RANDOM,
        type: new foundry.data.fields.StringField({
            required: true,
            choices: {
                RANDOM: "Random",
                MAX: "Maximum",
            }
        })
    });

    game.settings.register(MODULE_NAME, TOKEN_HP_FACTOR, {
        name: "Hp Multiplier",
        hint: "The calculated hp will be multiplied by this factor",
        scope: "world",
        config: true,
        type: new foundry.data.fields.NumberField(),
        default: 1
    })
    console.log("damage-progress | Settings registered!");
}

function getSetting(key){
    return game.settings.get(MODULE_NAME, key);
}

export function getHighHpColor() {
    return getSetting(HIGH_HP_COLOR);
}

export function getMidHpColor() {
    return getSetting(MID_HP_COLOR);
}

export function getLowHpColor() {
    return getSetting(LOW_HP_COLOR);
}

export function isHpCalcEnabled() {
    return getSetting(ENABLE_TOKEN_HP_CALC);
}

export function getHpCalcMode() {
    return getSetting(TOKEN_HP_MODE);
}

export function getHpFactor() {
    return getSetting(TOKEN_HP_FACTOR);
}
