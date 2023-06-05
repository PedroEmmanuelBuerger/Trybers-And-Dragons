import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _name: string;
  private _dexterity: number;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  get race() {
    return this._race;
  }
  
  get archetype() {
    return this._archetype;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get energy() {
    return { ...this._energy };
  }

  public VerifyLife(): void {
    const life = this._lifePoints;
    if (life <= 0) {
      this._lifePoints = -1;
    }
  }

  public receiveDamage(attackPoints: number): number {
    const damageReceive = attackPoints - this._defense;
    if (damageReceive > 0) {
      this._lifePoints -= damageReceive;
    } else {
      this._lifePoints -= 1;
    }
    this.VerifyLife();
    return this._lifePoints;
  }

  public attack(enemy: Fighter | SimpleFighter) : void {
    enemy.receiveDamage(this.strength);
  }

  public levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    const lifePointsRandom = this._maxLifePoints + getRandomInt(1, 10);
    if (lifePointsRandom > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
      this._lifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = lifePointsRandom;
      this._lifePoints = lifePointsRandom;
    }
  }

  public special(enemy: Fighter | SimpleFighter): void {
    const rollDice = getRandomInt(5, 20);
    const damageSpecial = rollDice + this._strength;
    enemy.receiveDamage(damageSpecial);
  }
}