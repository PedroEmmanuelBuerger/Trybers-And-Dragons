import Race from './Race';

export default class Halfling extends Race {
  public static instancies = 0;
  private _maxLifePoints = 60;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    Halfling.instancies += 1;
    return Halfling.instancies;
  }
}