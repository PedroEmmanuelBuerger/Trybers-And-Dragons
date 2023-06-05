import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _damage: EnergyType = 'stamina';
  private static instances = 0;

  get energyType() {
    return this._damage;
  }

  static createdArchetypeInstances() {
    Warrior.instances += 1;
    return Warrior.instances;
  }
}