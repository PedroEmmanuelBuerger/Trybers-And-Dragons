"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchsMap = exports.raceMap = void 0;
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
function getRandomInt(min, max) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}
const raceMap = {
    Elf: Races_1.Elf,
    Dwarf: Races_1.Dwarf,
    Halfling: Races_1.Halfling,
    Orc: Races_1.Orc,
};
exports.raceMap = raceMap;
const ArchsMap = {
    Mage: Archetypes_1.Mage,
    Necromancer: Archetypes_1.Necromancer,
    Warrior: Archetypes_1.Warrior,
    Ranger: Archetypes_1.Ranger,
};
exports.ArchsMap = ArchsMap;
exports.default = getRandomInt;
