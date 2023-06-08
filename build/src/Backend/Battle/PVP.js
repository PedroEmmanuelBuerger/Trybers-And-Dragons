"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = __importDefault(require("./Battle"));
class PVP extends Battle_1.default {
    constructor(player1, player2) {
        super(player1);
        this._player2 = player2;
    }
    fight() {
        for (;;) {
            this.player.attack(this._player2);
            if (this._player2.lifePoints === -1)
                break;
            this._player2.attack(this.player);
            if (this.player.lifePoints === -1)
                break;
        }
        return 1;
    }
}
exports.default = PVP;
