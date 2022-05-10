import Character from '../Character';
import heroesConfig from '../heroesCharacteristic';

export default class Undead extends Character {
  constructor(level) {
    const {
      type,
      attack,
      defence,
      player,
      stepsRadius,
      attackRadius,
    } = heroesConfig[new.target.name];

    super(level, attack, defence, player, stepsRadius, attackRadius);

    this.type = type;
  }
}
