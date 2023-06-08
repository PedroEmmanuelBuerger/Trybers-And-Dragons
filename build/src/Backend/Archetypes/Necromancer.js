"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = __importDefault(require("./Archetype"));
class Necromancer extends Archetype_1.default {
    constructor() {
        super(...arguments);
        this._damage = 'mana';
    }
    get energyType() {
        return this._damage;
    }
    static createdArchetypeInstances() {
        Necromancer.instances += 1;
        return Necromancer.instances;
    }
}
exports.default = Necromancer;
Necromancer.instances = 0;
