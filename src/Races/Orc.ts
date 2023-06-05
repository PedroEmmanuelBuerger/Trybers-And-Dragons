import Race from './Race';

export default class Orc extends Race {
  public static instancies = 0;
  private _maxLifePoints = 74;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    Orc.instancies += 1;
    return Orc.instancies;
  }
}