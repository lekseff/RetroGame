/* eslint-disable max-len */
import themes from './themes';
import cursors from './cursors';
import side from './side';
import GameState from './GameState';
import PositionedCharacter from './PositionedCharacter';
import Bowman from './Heroes/Bowman';
import Daemon from './Heroes/Daemon';
import Magician from './Heroes/Magician';
import Swordsman from './Heroes/Swordsman';
import Undead from './Heroes/Undead';
import Vampire from './Heroes/Vampire';
import {
  generateTeam,
  startFieldGenerator,
  getAvailableDistance,
  getAvailableAttack,
} from './generators';

// Типы персонажей пользователей
const userTypes = [Swordsman, Bowman, Magician];
const computerTypes = [Daemon, Undead, Vampire];

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.gameState = null; // Актуальное состояние игры
  }

  /**
   * Старт игры
   */
  init() {
    this.loadGame();
  }

  checkCell() {
    // События мыши на ячейке
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    // Сохранение игры
    this.gamePlay.addSaveGameListener(this.saveGame.bind(this));
    // Загрузка игры
    this.gamePlay.addLoadGameListener(this.loadGame.bind(this));
    // Новая игра
    this.gamePlay.addNewGameListener(this.newGame.bind(this));
  }

  /**
   * Действие при клике
   * @param {*} index * индекс ячейки по которой произошел клик
   * @returns -
   */
  onCellClick(index) {
    // TODO: react to click
    const hero = this.gameState.teams.find((elem) => elem.position === index);
    if (hero && hero.character.player === side.USER) {
      if (this.gameState.selectedHero) this.gamePlay.deselectCell(this.gameState.selectedHero.position);
      this.gamePlay.selectCell(index);
      this.gameState.availableSteps = getAvailableDistance(index, hero.character.stepsRadius);
      this.gameState.availableAttack = getAvailableAttack(index, hero.character.attackRadius);
      this.gameState.selectedHero = hero;
      return;
    }

    // Ход. Клик в пустое поле
    if (this.gameState.selectedHero) {
      // Если поле есть в допустимых значениях и в нем нет героя
      if (this.gameState.availableSteps.includes(index) && !hero) {
        this.gamePlay.deselectCell(this.gameState.selectedHero.position);
        this.gameState.selectedHero.position = index;
        this.gamePlay.deselectCell(index);
        // Проверка окончания уровня и передача хода
        this.checkLevel();
      }
      // Если в поле есть противник атакуем
      if (hero && hero.character.player === side.COMP && this.gameState.availableAttack.includes(index)) {
        this.attack(hero, this.gameState.selectedHero, index);
      }
      // Сообщение
      if (hero && hero.character.player === side.COMP && !this.gameState.availableAttack.includes(index)) {
        this.gamePlay.showPopup('Нужно подойти ближе');
      }
      return;
    }
    // Сообщения об ошибке
    if (!this.gameState.selectedHero && hero && hero.character.player === side.COMP) {
      let { type } = hero.character;
      type = type[0].toUpperCase() + type.slice(1);
      this.gamePlay.showPopup(`Это ${type}! Он явно не из наших!`);
    }

    // if (!this.gameState.selectedHero && !hero) {
    //   // GamePlay.showError('Тут никого нет');
    //   this.gamePlay.showPopup('Тут никого нет');
    // }
  }

  /**
   * Действие при уходе с ячейки
   * @param {*} index - индекс ячейки
   */
  onCellLeave(index) {
    // TODO: react to mouse leave
    this.gamePlay.hideCellTooltip(index);
    // Чтобы не убиралось выделение активного игрока
    if (this.gameState.selectedHero && (this.gameState.selectedHero.position !== index)) {
      this.gamePlay.deselectCell(index);
    }
  }

  /**
   * Действие при наведении на ячейку
   * @param {*} index - индекс ячейки
   */
  onCellEnter(index) {
    // Проверяем наличие персонажа в ячейке поля
    const hero = this.gameState.teams.find((elem) => elem.position === index);

    if (hero) {
      const toolTip = this.constructor.createToolTipTemplate.call(this, hero);
      this.gamePlay.showCellTooltip(toolTip, index);
    }
    // Меняем тип курсора,если нет выбранного персонажа
    this.activeCursor(hero);

    // Изменение типа курсора и подсветка ячейки хода/атаки при выбранном персонаже
    if (this.gameState.selectedHero) {
      this.activeCursorSelectedHero(index, hero);
    }
  }

  /**
   * Формирует шаблон всплывающей информации о персонаже
   * @param {*} hero - объект с характеристиками персонажа
   * @returns - шаблон (строка)
   */
  static createToolTipTemplate(hero) {
    const {
      level,
      health,
      attack,
      defence,
    } = hero.character;
    return `\u{1F396} ${level} \u{2694} ${attack} \u{1F6E1} ${defence} \u{2764} ${health}`;
  }

  /**
   * Устанавливает курсор, если нет выбранного персонажа
   * @param {*} hero - объект с характеристиками персонажа
   */
  activeCursor(hero) {
    if (hero) {
      const pointer = hero.character.player === side.USER ? cursors.pointer : cursors.notallowed;
      this.gamePlay.setCursor(pointer);
    } else {
      this.gamePlay.setCursor(cursors.auto);
    }
  }

  /**
   * Изменяет типа курсора и подсветку ячейки хода/атаки при выбранном персонаже
   * @param {*} index - индекс ячейки
   * @param {*} hero - объект с характеристиками персонажа
   */
  activeCursorSelectedHero(index, hero) {
    if (this.gameState.availableSteps.includes(index) && !hero) {
      this.gamePlay.setCursor(cursors.pointer);
      this.gamePlay.selectCell(index, 'green');
    } else if (hero && hero.character.player === side.COMP && this.gameState.availableAttack.includes(index)) {
      this.gamePlay.setCursor(cursors.crosshair);
      this.gamePlay.selectCell(index, 'red');
    } else if (hero && hero.character.player === side.USER) {
      this.gamePlay.setCursor(cursors.pointer);
    } else {
      this.gamePlay.setCursor(cursors.notallowed);
    }
  }

  /**
   * Сохранение игры
   */
  saveGame() {
    this.stateService.save(this.gameState);
    // GamePlay.showMessage('Игра сохранена');
    this.gamePlay.showPopup('Игра сохранена');
  }

  /**
   * Загрузка сохраненной игры, если такая есть
   */
  loadGame() {
    // Чтобы не добавлялись лишние события при загрузке во время игры
    if (this.gamePlay.cellClickListeners.length === 0) {
      this.checkCell();
    }
    try {
      const load = this.stateService.load();
      if (load) {
        this.gameState = GameState.from(load);
        this.gamePlay.drawUi(Object.values(themes)[this.gameState.stage - 1]);
        this.gamePlay.redrawPositions(this.gameState.teams);
      } else {
        this.newGame();
      }
    } catch (error) {
      // localStorage.removeItem('state');
      this.constructor.clearLocalStorage('state');
      this.gamePlay.showPopup(`Ошибка загрузки: "${error.message}"`);
      this.newGame();
    }
  }

  /**
   * Новая игра сначала
   */
  newGame() {
    if (this.gamePlay.cellClickListeners.length === 0) {
      this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    }
    const totalScores = this.gameState ? this.gameState.scores : 0;
    this.gameState = new GameState(1, [], side.USER, totalScores);
    this.nextStage(this.gameState.stage);
  }

  /**
   * Переход хода
   */
  nextPlayer() {
    this.gameState.motion = (this.gameState.motion === side.USER) ? side.COMP : side.USER;
    // console.log('Ход переходит к:', this.gameState.motion);
    if (this.gameState.motion === side.COMP) {
      this.computerLogic();
    }
    this.gameState.clear();
  }

  /**
   * Проверка окончания уровня
   */
  checkLevel() {
    const userValue = this.gameState.teams.some((member) => member.character.player === side.USER);
    const computerValue = this.gameState.teams.some((member) => member.character.player === side.COMP);
    if (userValue && computerValue) {
      this.nextPlayer();
      return;
    }
    if (!computerValue) {
      this.gameState.clear();
      this.gameState.addScores();
      this.nextStage(this.gameState.stage += 1);
    }
    if (!userValue) {
      // GamePlay.showMessage('Враг оказался хитрее и сильнее(((');
      this.gamePlay.showPopup('Вы проиграли! Попробуйте еще раз!');
    }
  }

  /**
   * Переход на следующий уровень
   * @param {number} stage - Номер уровня
   */
  nextStage(stage) {
    if (stage === 1) {
      this.constructor.teamGeneration.call(this, userTypes, side.USER, 1, 2);
      this.constructor.teamGeneration.call(this, computerTypes, side.COMP, 1, 2);
    }

    if (stage > 1 && stage < 5) {
      // Повышаем уровень оставшихся
      this.constructor.levelUp.call(this);
      // + к команде user
      const count = (stage === 2) ? 1 : 2;
      this.constructor.teamGeneration.call(this, userTypes, side.USER, stage - 1, count);
      // новая команда компа
      const userCount = this.gameState.teams.filter((member) => member.character.player === side.USER).length;
      this.constructor.teamGeneration.call(this, computerTypes, side.COMP, stage, userCount);
      this.gamePlay.showPopup(`Уровень ${stage} Счет: ${this.gameState.scores}`);
    }

    if (stage >= 5) {
      // Блокировка поля
      this.gamePlay.cellClickListeners.length = 0;
      // GamePlay.showMessage(`Победа! Игра окончена. Счет: ${this.gameState.scores}`);
      this.gamePlay.showPopup(`Победа! Игра окончена. Счет: ${this.gameState.scores}`);
    } else {
      this.gamePlay.drawUi(Object.values(themes)[this.gameState.stage - 1]);
      this.gamePlay.redrawPositions(this.gameState.teams);
      // this.gamePlay.showPopup(`Уровень ${stage} Счет: ${this.gameState.scores}`);
    }
  }

  /**
   * Атака, расчет, выделение, удаление погибшего героя
   */
  async attack(attacked, attacker, indexAttacked) {
    // Значение атаки атакующего персонажа
    const { attack } = attacker.character;
    // Значение защиты атакуемого
    const { defense } = attacked.character;
    // Атакуемый персонаж
    const attackedUnit = attacked.character;
    // Урон от атаки
    const damage = 2 * Math.round(Math.max((attack - defense, attack * 0.1)));
    attackedUnit.health -= damage;
    // Проверка убит ли герой
    if (attacked.character.health <= 0) {
      this.gameState.removeHero(indexAttacked);
    }
    // Выделяем атакующего и атакуемого героя
    this.gamePlay.selectCell(attacker.position);
    this.gamePlay.selectCell(attacked.position, 'red');
    // Обновляем поле
    this.gamePlay.redrawPositions(this.gameState.teams);
    // Чтобы не было выделения ячеек при анимации
    this.gameState.selectedHero = null;
    // Отображаем уровень урона анимацией
    await this.gamePlay.showDamage(indexAttacked, damage);
    // Снимаем выделение с атакующего и атакуемого героя
    this.gamePlay.deselectCell(attacker.position);
    this.gamePlay.deselectCell(attacked.position);
    this.checkLevel();
  }

  /**
   * Логика хода и атаки компьютера
   */
  computerLogic() {
    const { teams } = this.gameState;
    const computerTeams = teams.filter((member) => member.character.player === side.COMP);
    const userTeams = teams.filter((member) => member.character.player === side.USER);
    // Проверяем возможность атаки
    const attack = computerTeams.some((compUnit) => {
      this.gameState.availableAttack = getAvailableAttack(compUnit.position, compUnit.character.attackRadius);
      const attacked = userTeams.find((userUnit) => this.gameState.availableAttack.includes(userUnit.position));
      if (attacked) {
        this.attack(attacked, compUnit, attacked.position);
        return true;
      }
      return false;
    });
    // Ход computer
    if (!attack && computerTeams.length && userTeams.length) {
      const unit = Math.floor(Math.random() * computerTeams.length);
      const steps = getAvailableDistance(computerTeams[unit].position, computerTeams[unit].character.stepsRadius);
      const step = Math.floor(Math.random() * steps.length);
      computerTeams[unit].position = steps[step];
      this.checkLevel();
      this.gamePlay.redrawPositions(this.gameState.teams);
    }
  }

  /**
   * Повышает уровень членов команды
   */
  static levelUp() {
    for (const member of this.gameState.teams) {
      const parameter = member.character;
      member.position = startFieldGenerator(side.USER); // Возвращаем игроков с свои поля
      parameter.level += 1;
      parameter.health = parameter.health + 80 >= 100 ? 100 : parameter.health + 80;
      parameter.attack = Math.floor(Math.max(parameter.attack, parameter.attack * (0.8 + parameter.health / 100)));
    }
  }

  /**
   *  Генератор стартовых команд (два не могут быть на одном поле)
   * @param {*} teamType - Массив допустимых классов игрока
   * @param {*} prayer - Тип игрока 'user' или 'computer'
   * @returns - Массив объектов типа PositionedCharacter
   */
  static teamGeneration(teamType, prayer, maxLevel, count) {
    // Генерируем новую команду
    let newTeam = generateTeam(teamType, maxLevel, count);
    // Список занятых на поле позиций
    const positionList = [];
    if (this.gameState.teams.length) {
      this.gameState.teams.forEach((elem) => positionList.push(elem.position));
    }
    // Добавляем позиции новым персонажам
    newTeam = newTeam.toArray.reduce((acc, member) => {
      // Случайная позиция персонажа из списка доступных
      let randomNumber = startFieldGenerator(prayer);
      // Если есть такая позиция уже есть генерируем новую
      while (positionList.includes(randomNumber)) {
        randomNumber = startFieldGenerator(prayer);
      }
      positionList.push(randomNumber);
      acc.push(new PositionedCharacter(member, randomNumber));
      return acc;
    }, []);
    this.gameState.teams.push(...newTeam);
  }

  /**
 * Очищает локальное хранилище
 * @param {string} key - значение по которому очистить localStorage;
 */
  static clearLocalStorage(key) {
    localStorage.removeItem(key);
  }
}
