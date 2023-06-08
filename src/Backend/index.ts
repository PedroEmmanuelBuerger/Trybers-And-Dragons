import Battle from './Battle';
import Character from './Character';

const player1 = new Character('pedro', 'Dwarf', 'Necromancer');
console.log(player1);

function runBattles(battles: Battle[]): void {
  for (let i = 0; i < battles.length; i += 1) {
    battles[i].fight();
  }
}

export default runBattles;