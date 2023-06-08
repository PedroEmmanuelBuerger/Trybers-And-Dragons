"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = __importDefault(require("./Race"));
class Elf extends Race_1.default {
    constructor() {
        super(...arguments);
        this._maxLifePoints = 99;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static createdRacesInstances() {
        Elf.instancies += 1;
        return Elf.instancies;
    }
}
exports.default = Elf;
Elf.instancies = 0;
