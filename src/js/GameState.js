export default class GameState {
  static from(object) {
    // TODO: create object
    // return null;
    const {
      stage,
      teams,
      motion,
      point,
    } = object;
    return new GameState(stage, teams, motion, point);
  }

  constructor(stage, teams, motion, point) {
    this.stage = stage; // Уровень игры
    this.teams = teams; // Команда
    this.motion = motion; // Очередь хода
    this.point = point ?? 0; // Количество очков
    this.availableSteps = null; // Доступные после выбора варианты хода
    this.availableAttack = null; // Доступные после выбора варианты атаки
    this.selectedHero = null; // Выбранный персонаж
  }

  // Очищает значение доступных шагов и атаки
  clear() {
    this.availableSteps = null;
    this.availableAttack = null;
    this.selectedHero = null;
  }

  removeHero(index) {
    this.teams = this.teams.filter((member) => member.position !== index);
  }
}
