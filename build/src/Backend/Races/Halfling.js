"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = __importDefault(require("./Race"));
class Halfling extends Race_1.default {
    constructor() {
        super(...arguments);
        this._maxLifePoints = 60;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static createdRacesInstances() {
        Halfling.instancies += 1;
        return Halfling.instancies;
    }
}
exports.default = Halfling;
Halfling.instancies = 0;
