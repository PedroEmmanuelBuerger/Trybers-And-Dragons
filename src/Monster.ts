import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints = 85;
  private _strength = 63;

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this.lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}