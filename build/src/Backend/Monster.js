"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monster {
    constructor() {
        this._lifePoints = 85;
        this._strength = 63;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    receiveDamage(attackPoints) {
        this._lifePoints -= attackPoints;
        if (this.lifePoints <= 0) {
            this._lifePoints = -1;
        }
        return this.lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this.strength);
    }
}
exports.default = Monster;
