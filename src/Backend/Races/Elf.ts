import Race from './Race';

export default class Elf extends Race {
  public static instancies = 0;
  private _maxLifePoints = 99;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    Elf.instancies += 1;
    return Elf.instancies;
  }
}