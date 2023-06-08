"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = __importDefault(require("./Race"));
class Dwarf extends Race_1.default {
    constructor() {
        super(...arguments);
        this._maxLifePoints = 80;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static createdRacesInstances() {
        Dwarf.instancies += 1;
        return Dwarf.instancies;
    }
}
exports.default = Dwarf;
Dwarf.instancies = 0;
