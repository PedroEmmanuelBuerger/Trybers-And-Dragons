"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importStar(require("./utils"));
class Character {
    constructor(name, race, archetype) {
        this._name = name;
        this._dexterity = (0, utils_1.default)(1, 10);
        const RaceClass = utils_1.raceMap[race];
        this._race = new RaceClass(name, this._dexterity);
        const ArchClass = utils_1.ArchsMap[archetype];
        this._archetype = new ArchClass(name);
        this._maxLifePoints = this._race.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._strength = (0, utils_1.default)(1, 10);
        this._defense = (0, utils_1.default)(1, 10);
        this._energy = {
            type_: this._archetype.energyType,
            amount: (0, utils_1.default)(1, 10),
        };
    }
    get name() {
        return this._name;
    }
    get dexterity() {
        return this._dexterity;
    }
    get race() {
        return this._race;
    }
    get archetype() {
        return this._archetype;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    get defense() {
        return this._defense;
    }
    get energy() {
        return { ...this._energy };
    }
    VerifyLife() {
        const life = this._lifePoints;
        if (life <= 0) {
            this._lifePoints = -1;
        }
    }
    receiveDamage(attackPoints) {
        const damageReceive = attackPoints - this._defense;
        if (damageReceive > 0) {
            this._lifePoints -= damageReceive;
        }
        else {
            this._lifePoints -= 1;
        }
        this.VerifyLife();
        return this._lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this.strength);
    }
    levelUp() {
        this._strength += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        this._energy.amount = 10;
        const lifePointsRandom = this._maxLifePoints + (0, utils_1.default)(1, 10);
        if (lifePointsRandom > this._race.maxLifePoints) {
            this._maxLifePoints = this._race.maxLifePoints;
            this._lifePoints = this._race.maxLifePoints;
        }
        else {
            this._maxLifePoints = lifePointsRandom;
            this._lifePoints = lifePointsRandom;
        }
    }
    special(enemy) {
        const rollDice = (0, utils_1.default)(5, 20);
        const damageSpecial = rollDice + this._strength;
        enemy.receiveDamage(damageSpecial);
    }
}
exports.default = Character;
