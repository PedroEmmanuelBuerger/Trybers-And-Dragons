"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PVE = exports.PVP = void 0;
const Battle_1 = __importDefault(require("./Battle"));
const PVE_1 = __importDefault(require("./PVE"));
exports.PVE = PVE_1.default;
const PVP_1 = __importDefault(require("./PVP"));
exports.PVP = PVP_1.default;
exports.default = Battle_1.default;
