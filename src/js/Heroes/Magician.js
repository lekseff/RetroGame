import Character from '../Character';

export default class Magician extends Character {
  constructor(level) {
    super(level, 'user', 1, 4, 'magician');
    this.attack = 10;
    this.defence = 40;
  }
}
