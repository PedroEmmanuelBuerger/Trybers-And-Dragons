import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _damage: EnergyType = 'mana';
  private static instances = 0;

  get energyType() {
    return this._damage;
  }

  static createdArchetypeInstances() {
    Mage.instances += 1;
    return Mage.instances;
  }
}