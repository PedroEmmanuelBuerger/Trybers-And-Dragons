"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = __importDefault(require("./Race"));
class Orc extends Race_1.default {
    constructor() {
        super(...arguments);
        this._maxLifePoints = 74;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static createdRacesInstances() {
        Orc.instancies += 1;
        return Orc.instancies;
    }
}
exports.default = Orc;
Orc.instancies = 0;
