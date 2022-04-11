/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import themes from './themes';
import cursors from './cursors';
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
  characterGenerator,
  startFieldGenerator,
  getAvailableDistance,
  getAvailableAttack,
} from './generators';

const gameState = new GameState(2, [], 'user');
const userTypes = [Swordsman, Bowman, Magician];
const computerTypes = [Daemon, Undead, Vampire];
// let prevSelectedHero = null;

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    this.gamePlay.drawUi(Object.values(themes)[gameState.stage - 1]);
    this.startGame();
    // TODO: load saved stated from stateService
  }

  checkCell() {
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
  }

  onCellClick(index) {
    // TODO: react to click
    const hero = gameState.teams.find((elem) => elem.position === index);
    if (hero && hero.character.player === 'user') {
      if (gameState.selectedHero) this.gamePlay.deselectCell(gameState.selectedHero.position);
      this.gamePlay.selectCell(index);
      gameState.availableSteps = getAvailableDistance(index, hero.character.stepsRadius);
      gameState.availableAttack = getAvailableAttack(index, hero.character.attackRadius);
      // gameState.selected = true;
      gameState.selectedHero = hero;
      // prevSelectedHero = index;
      // console.log('После первого клика: ', gameState);
      return;
    }

    // Ход. Клик в пустое поле
    if (gameState.selectedHero) {
      // Если поле есть в допустимых значениях и в нем нет героя
      if (gameState.availableSteps.includes(index) && !hero) {
        this.gamePlay.deselectCell(gameState.selectedHero.position);
        gameState.selectedHero.position = index;
        this.gamePlay.deselectCell(index);
        // gameState.selected = false;
        gameState.clear();
        // Передача хода
        this.nextPlayer();
        // this.gamePlay.redrawPositions(gameState.teams);
      }
      // Если в поле есть противник
      if (hero && hero.character.player === 'computer' && gameState.availableAttack.includes(index)) {
        console.log('Атака Ура!');
        this.attack(hero, gameState.selectedHero, index);
        // Снимаем выделение с атакуемого и атакующего персонажа
        this.gamePlay.deselectCell(index);
        this.gamePlay.deselectCell(gameState.selectedHero.position);
        // gameState.selected = false;
        gameState.clear();
        console.log('После атаки: ', gameState);
      }
    }
    // Чтоб не мешали сообщения об ошибке
    // if (hero && hero.character.player === 'user') {
    //   this.gamePlay.selectCell(index);
    // } else if (hero && hero.character.player === 'computer') {
    //   GamePlay.showError('Это чужой игрок)');
    // } else {
    //   GamePlay.showError('Здесь никого нет)');
    // }
    // console.log('После второго клика: ', gameState);
  }

  onCellEnter(index) {
    // console.log('onCellEnter-', index);
    // TODO: react to mouse enter
    const hero = gameState.teams.find((elem) => elem.position === index);
    // Показывает подсказку, если в поле есть герой
    if (hero) {
      const {
        level,
        health,
        attack,
        defence,
      } = hero.character;
      const toolTip = `\u{1F396} ${level} \u{2694} ${attack} \u{1F6E1} ${defence} \u{2764} ${health}`;
      this.gamePlay.showCellTooltip(toolTip, index);
    }

    // Если в клетке есть герой, но не выделен
    if (hero) {
      const pointer = hero.character.player === 'user' ? cursors.pointer : cursors.notallowed;
      this.gamePlay.setCursor(pointer);
    } else {
      this.gamePlay.setCursor(cursors.auto);
    }

    // Изменение курсора при выделенном герое
    if (gameState.selectedHero) {
      // Выделение зеленым если доступно поле для хода и нет никакого героя
      if (gameState.availableSteps.includes(index) && !hero) {
        this.gamePlay.setCursor(cursors.pointer);
        this.gamePlay.selectCell(index, 'green');
      }
      // Выделение красным, если в клетке есть герой доступный для атаки
      if (hero && hero.character.player === 'computer' && gameState.availableAttack.includes(index)) {
        this.gamePlay.setCursor(cursors.crosshair);
        this.gamePlay.selectCell(index, 'red');
      }
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
    // console.log('onCellLeave сработал -', index);
    this.gamePlay.hideCellTooltip(index);
    // Чтобы не убиралось выделение активного игрока
    if (gameState.selectedHero && gameState.availableSteps.includes(index)) {
      this.gamePlay.deselectCell(index);
    }
  }

  startGame() {
    this.teamGeneration(userTypes, 'user');
    this.teamGeneration(computerTypes, 'computer');
    // Отображаем сгенерированную команду
    this.gamePlay.redrawPositions(gameState.teams);
    // Проверка событий на ячейках
    this.checkCell();
  }

  nextPlayer() {
    gameState.motion = (gameState.motion === 'user') ? 'computer' : 'user';
    console.log('Ход переходит к:', gameState.motion);
    if (gameState.motion === 'computer') {
      this.computerLogic();
    }
  }

  async attack(attacked, attacker, indexAttacked) {
    console.log('Метод атака');
    // Значение атаки атакующего персонажа
    const { attack } = attacker.character;
    // Значение защиты атакуемого
    const { defense } = attacked.character;
    // Урон от атаки
    const damage = Math.max((attack - defense, attack * 0.1));
    // eslint-disable-next-line no-param-reassign
    attacked.character.health -= damage;
    // Проверка убит ли герой
    if (attacked.character.health <= 0) {
      gameState.removeHero(indexAttacked);
    }
    // выделяем атакующего и атакуемого героя
    this.gamePlay.selectCell(attacker.position);
    this.gamePlay.selectCell(attacked.position, 'red');
    this.gamePlay.redrawPositions(gameState.teams);
    // Отображаем уровень урона анимацией
    await this.gamePlay.showDamage(indexAttacked, damage);
    console.log('После анимации');
    // Снимаем выделение с атакующего и атакуемого героя
    this.gamePlay.deselectCell(attacker.position);
    this.gamePlay.deselectCell(attacked.position);
    this.nextPlayer();
  }

  computerLogic() {
    const { teams } = gameState;
    const computerTeams = teams.filter((member) => member.character.player === 'computer');
    const userTeams = teams.filter((member) => member.character.player === 'user');
    // Проверяем возможность атаки
    const attack = computerTeams.some((compUnit) => {
    // eslint-disable-next-line max-len
      gameState.availableAttack = getAvailableAttack(compUnit.position, compUnit.character.attackRadius);
      const attacked = userTeams.find((userUnit) => gameState.availableAttack.includes(userUnit.position));
      if (attacked) {
        // console.log(compUnit, ' - может атаковать - ', attacked);
        this.attack(attacked, compUnit, attacked.position);
        return true;
      }
      return false;
    });
    // Временный вариант, чтоб ходил хоть куда-то
    if (!attack) {
      console.log('Некого атаковать. Переход хода!');
      computerTeams[0].position += 1;
      this.nextPlayer();
      this.gamePlay.redrawPositions(gameState.teams);
    }
  }

  /**
   *  Генератор стартовых команд (два не могут быть на одном поле)
   * @param {*} teamType - Массив допустимых классов игрока
   * @param {*} prayer - Тип игрока 'user' или 'computer'
   * @returns - Массив объектов типа PositionedCharacter
   */
  teamGeneration(teamType, prayer) {
    // ? Переделать логику т.к теперь все одном массиве. Пока так
    let newTeam = generateTeam(teamType, 1, 2);
    newTeam = newTeam.toArray.reduce((acc, member) => {
      let randomNumber = startFieldGenerator(prayer);
      // Проверяем не занята ли ячейка(есть косяк с повтором, нужно сделать постоянную проверку)
      if (acc.some((elem) => elem.position === randomNumber)) {
        randomNumber = startFieldGenerator(prayer);
      }
      acc.push(new PositionedCharacter(member, randomNumber));
      return acc;
    }, []);
    // return newTeam;
    gameState.teams.push(...newTeam);
  }
}
