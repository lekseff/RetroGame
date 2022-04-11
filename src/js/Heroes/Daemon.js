import Character from '../Character';

export default class Daemon extends Character {
  constructor(level) {
    super(level, 'computer', 1, 4, 'daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
