import { Mage, Necromancer, Ranger, Warrior } from './Archetypes';
import { Dwarf, Elf, Halfling, Orc } from './Races';

function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}
const raceMap = {
  Elf,
  Dwarf,
  Halfling,
  Orc,
};

const ArchsMap = {
  Mage,
  Necromancer,
  Warrior,
  Ranger,
};

export default getRandomInt;

export {
  raceMap,
  ArchsMap,
};