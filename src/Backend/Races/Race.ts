export default abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;

  public get name() {
    return this._name;
  }

  public get dexterity() {
    return this._dexterity;
  }
}
