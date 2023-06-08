"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("./Character"));
const player1 = new Character_1.default('pedro', 'Dwarf', 'Necromancer');
console.log(player1);
function runBattles(battles) {
    for (let i = 0; i < battles.length; i += 1) {
        battles[i].fight();
    }
}
exports.default = runBattles;
