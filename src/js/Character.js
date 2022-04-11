export default class Character {
  constructor(level, player, stepsRadius, attackRadius, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    // this.health = 50;
    this.health = 20;
    this.type = type;
    this.player = player;
    this.stepsRadius = stepsRadius;
    this.attackRadius = attackRadius;
    // TODO: throw error if user use "new Character()"
    if (new.target.name === 'Character') {
      throw new Error('Запрещено создавать объекты базового класса Character!');
    }
  }

  levelUp() {
    this.level += 1;
    this.health = this.health + 80 >= 100 ? 100 : this.health + 80;
    this.attack = Math.floor(Math.max(this.attack, this.attack * (0.8 + this.health / 100)));
  }
}
