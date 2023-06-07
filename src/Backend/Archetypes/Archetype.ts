import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private readonly _name: string;
  private readonly _special: number = 0;
  private readonly _cost: number = 0;
  
  constructor(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public get special() {
    return this._special;
  }

  public get cost() {
    return this._cost;
  }

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get energyType(): EnergyType;
}
