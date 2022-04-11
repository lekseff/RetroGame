import Character from '../Character';

export default class Vampire extends Character {
  constructor(level) {
    super(level, 'computer', 2, 2, 'vampire');
    this.attack = 25;
    this.defence = 25;
  }
}
