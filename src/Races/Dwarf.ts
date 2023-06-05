import Race from './Race';

export default class Dwarf extends Race {
  public static instancies = 0;
  private _maxLifePoints = 80;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    Dwarf.instancies += 1;
    return Dwarf.instancies;
  }
}