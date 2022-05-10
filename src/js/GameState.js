export default class GameState {
  static from(object) {
    // TODO: create object
    const {
      stage,
      teams,
      motion,
      scores,
    } = object;
    return new GameState(stage, teams, motion, scores);
  }

  constructor(stage, teams, motion, scores) {
    this.stage = stage; // Уровень игры
    this.teams = teams; // Команда
    this.motion = motion; // Очередь хода
    this.scores = scores || 0; // Количество очков
    this.availableSteps = null; // Доступные после выбора варианты хода
    this.availableAttack = null; // Доступные после выбора варианты атаки
    this.selectedHero = null; // Выбранный персонаж
  }

  /**
   * Очищает значение доступных шагов и атаки
   */
  clear() {
    this.availableSteps = null;
    this.availableAttack = null;
    this.selectedHero = null;
  }

  /**
   * Удаляет героя из команды по индексу
   * @param {*} index - Индекс
   */
  removeHero(index) {
    this.teams = this.teams.filter((member) => member.position !== index);
  }

  /**
   * Считает и добавляет очки за раунд
   */
  addScores() {
    const sum = this.teams.reduce((acc, member) => {
      if (member.character.player === 'user') {
        return acc + member.character.health;
      }
      return acc;
    }, 0);
    this.scores += sum;
  }
}
