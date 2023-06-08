"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = __importDefault(require("./Archetype"));
class Warrior extends Archetype_1.default {
    constructor() {
        super(...arguments);
        this._damage = 'stamina';
    }
    get energyType() {
        return this._damage;
    }
    static createdArchetypeInstances() {
        Warrior.instances += 1;
        return Warrior.instances;
    }
}
exports.default = Warrior;
Warrior.instances = 0;
