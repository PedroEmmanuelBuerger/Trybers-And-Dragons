import Fighter from '../Fighter';
import Battle from './Battle';
import ArrayMonsters from '../type/Pve';

export default class PVE extends Battle {
  private _monster: ArrayMonsters;

  constructor(player: Fighter, monster: ArrayMonsters) {
    super(player);
    this._monster = monster;
  }

  private playerAttack(): void {
    for (let i = 0; i < this._monster.length; i += 1) {
      this.player.attack(this._monster[i]);
    }
  }

  private monsterAttacks(): void {
    for (let i = 0; i < this._monster.length; i += 1) {
      this._monster[i].attack(this.player);
      if (this.player.lifePoints === -1) break;
    }
  }

  public fight(): number {
    for (;;) {
      this.playerAttack();
      if (this._monster.every((player) => player.lifePoints === -1)) return 1;
      this.monsterAttacks();
      if (this.player.lifePoints === -1) break;
    }
    return 1;
  }
}