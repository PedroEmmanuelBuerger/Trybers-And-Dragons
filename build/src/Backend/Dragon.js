"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Monster_1 = __importDefault(require("./Monster"));
class Dragon extends Monster_1.default {
    constructor() {
        super();
        this._lifePoints = 999;
    }
}
exports.default = Dragon;
