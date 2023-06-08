"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = exports.Ranger = exports.Necromancer = exports.Mage = void 0;
const Archetype_1 = __importDefault(require("./Archetype"));
const Mage_1 = __importDefault(require("./Mage"));
exports.Mage = Mage_1.default;
const Necromancer_1 = __importDefault(require("./Necromancer"));
exports.Necromancer = Necromancer_1.default;
const Ranger_1 = __importDefault(require("./Ranger"));
exports.Ranger = Ranger_1.default;
const Warrior_1 = __importDefault(require("./Warrior"));
exports.Warrior = Warrior_1.default;
exports.default = Archetype_1.default;
