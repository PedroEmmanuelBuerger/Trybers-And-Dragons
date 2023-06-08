"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = __importDefault(require("./Archetype"));
class Mage extends Archetype_1.default {
    constructor() {
        super(...arguments);
        this._damage = 'mana';
    }
    get energyType() {
        return this._damage;
    }
    static createdArchetypeInstances() {
        Mage.instances += 1;
        return Mage.instances;
    }
}
exports.default = Mage;
Mage.instances = 0;
