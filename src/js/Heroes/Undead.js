import Character from '../Character';

export default class Undead extends Character {
  constructor(level) {
    super(level, 'computer', 4, 1, 'undead');
    this.attack = 40;
    this.defence = 10;
  }
}
