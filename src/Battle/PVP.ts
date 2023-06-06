import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }

  public fight(): number {
    for (;;) {
      this.player.attack(this._player2);
      if (this._player2.lifePoints === -1) return 1;
      this._player2.attack(this.player);
      if (this.player.lifePoints === -1) break;
    }  
    return -1;
  }
}