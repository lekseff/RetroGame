export default class Character {
  constructor(level, attack, defence, player, stepsRadius, attackRadius) {
    this.level = level; // Уровень игрока
    this.attack = attack; // Сила атаки
    this.defence = defence; // Защита
    this.health = 100; // Здоровье
    this.player = player; // Тип игрока 'user' или 'computer'
    this.stepsRadius = stepsRadius; // Доступный радиус хода в клетках
    this.attackRadius = attackRadius; // Доступный радиус атаки в клетках

    // TODO: throw error if user use "new Character()"
    if (new.target.name === 'Character') {
      throw new Error('Запрещено создавать объекты базового класса Character!');
    }
  }
}
