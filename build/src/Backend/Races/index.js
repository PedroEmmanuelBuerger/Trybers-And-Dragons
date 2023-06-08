"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orc = exports.Halfling = exports.Elf = exports.Dwarf = void 0;
const Dwarf_1 = __importDefault(require("./Dwarf"));
exports.Dwarf = Dwarf_1.default;
const Elf_1 = __importDefault(require("./Elf"));
exports.Elf = Elf_1.default;
const Halfling_1 = __importDefault(require("./Halfling"));
exports.Halfling = Halfling_1.default;
const Orc_1 = __importDefault(require("./Orc"));
exports.Orc = Orc_1.default;
const Race_1 = __importDefault(require("./Race"));
exports.default = Race_1.default;
