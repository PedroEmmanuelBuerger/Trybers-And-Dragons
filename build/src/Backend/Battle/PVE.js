"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = __importDefault(require("./Battle"));
class PVE extends Battle_1.default {
    constructor(player, monster) {
        super(player);
        this._monster = monster;
    }
    playerAttack() {
        for (let i = 0; i < this._monster.length; i += 1) {
            this.player.attack(this._monster[i]);
        }
    }
    monsterAttacks() {
        for (let i = 0; i < this._monster.length; i += 1) {
            this._monster[i].attack(this.player);
            if (this.player.lifePoints === -1)
                break;
        }
    }
    fight() {
        for (;;) {
            this.playerAttack();
            if (this._monster.every((player) => player.lifePoints === -1))
                return 1;
            this.monsterAttacks();
            if (this.player.lifePoints === -1)
                break;
        }
        return 1;
    }
}
exports.default = PVE;
