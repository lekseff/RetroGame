/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/js/Character.js":
/*!*****************************!*\
  !*** ./src/js/Character.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Character; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");



var Character = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function Character(level, attack, defence, player, stepsRadius, attackRadius) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Character);

  this.level = level; // Уровень игрока

  this.attack = attack; // Сила атаки

  this.defence = defence; // Защита

  this.health = 100; // Здоровье

  this.player = player; // Тип игрока 'user' или 'computer'

  this.stepsRadius = stepsRadius; // Доступный радиус хода в клетках

  this.attackRadius = attackRadius; // Доступный радиус атаки в клетках
  // TODO: throw error if user use "new Character()"

  if ((this instanceof Character ? this.constructor : void 0).name === 'Character') {
    throw new Error('Запрещено создавать объекты базового класса Character!');
  }
});



/***/ }),

/***/ "./src/js/GameController.js":
/*!**********************************!*\
  !*** ./src/js/GameController.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GameController; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themes */ "./src/js/themes.js");
/* harmony import */ var _cursors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cursors */ "./src/js/cursors.js");
/* harmony import */ var _side__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./side */ "./src/js/side.js");
/* harmony import */ var _GameState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GameState */ "./src/js/GameState.js");
/* harmony import */ var _PositionedCharacter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PositionedCharacter */ "./src/js/PositionedCharacter.js");
/* harmony import */ var _Heroes_Bowman__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Heroes/Bowman */ "./src/js/Heroes/Bowman.js");
/* harmony import */ var _Heroes_Daemon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Heroes/Daemon */ "./src/js/Heroes/Daemon.js");
/* harmony import */ var _Heroes_Magician__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Heroes/Magician */ "./src/js/Heroes/Magician.js");
/* harmony import */ var _Heroes_Swordsman__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Heroes/Swordsman */ "./src/js/Heroes/Swordsman.js");
/* harmony import */ var _Heroes_Undead__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Heroes/Undead */ "./src/js/Heroes/Undead.js");
/* harmony import */ var _Heroes_Vampire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Heroes/Vampire */ "./src/js/Heroes/Vampire.js");
/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./generators */ "./src/js/generators.js");





function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* eslint-disable max-len */











 // Типы персонажей пользователей

var userTypes = [_Heroes_Swordsman__WEBPACK_IMPORTED_MODULE_13__["default"], _Heroes_Bowman__WEBPACK_IMPORTED_MODULE_10__["default"], _Heroes_Magician__WEBPACK_IMPORTED_MODULE_12__["default"]];
var computerTypes = [_Heroes_Daemon__WEBPACK_IMPORTED_MODULE_11__["default"], _Heroes_Undead__WEBPACK_IMPORTED_MODULE_14__["default"], _Heroes_Vampire__WEBPACK_IMPORTED_MODULE_15__["default"]];

var GameController = /*#__PURE__*/function () {
  function GameController(gamePlay, stateService) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, GameController);

    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.gameState = null; // Актуальное состояние игры
  }
  /**
   * Старт игры
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(GameController, [{
    key: "init",
    value: function init() {
      this.loadGame();
    }
  }, {
    key: "checkCell",
    value: function checkCell() {
      // События мыши на ячейке
      this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
      this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
      this.gamePlay.addCellClickListener(this.onCellClick.bind(this)); // Сохранение игры

      this.gamePlay.addSaveGameListener(this.saveGame.bind(this)); // Загрузка игры

      this.gamePlay.addLoadGameListener(this.loadGame.bind(this)); // Новая игра

      this.gamePlay.addNewGameListener(this.newGame.bind(this));
    }
    /**
     * Действие при клике
     * @param {*} index * индекс ячейки по которой произошел клик
     * @returns -
     */

  }, {
    key: "onCellClick",
    value: function onCellClick(index) {
      // TODO: react to click
      var hero = this.gameState.teams.find(function (elem) {
        return elem.position === index;
      });

      if (hero && hero.character.player === _side__WEBPACK_IMPORTED_MODULE_7__["default"].USER) {
        if (this.gameState.selectedHero) this.gamePlay.deselectCell(this.gameState.selectedHero.position);
        this.gamePlay.selectCell(index);
        this.gameState.availableSteps = (0,_generators__WEBPACK_IMPORTED_MODULE_16__.getAvailableDistance)(index, hero.character.stepsRadius);
        this.gameState.availableAttack = (0,_generators__WEBPACK_IMPORTED_MODULE_16__.getAvailableAttack)(index, hero.character.attackRadius);
        this.gameState.selectedHero = hero;
        return;
      } // Ход. Клик в пустое поле


      if (this.gameState.selectedHero) {
        // Если поле есть в допустимых значениях и в нем нет героя
        if (this.gameState.availableSteps.includes(index) && !hero) {
          this.gamePlay.deselectCell(this.gameState.selectedHero.position);
          this.gameState.selectedHero.position = index;
          this.gamePlay.deselectCell(index); // Проверка окончания уровня и передача хода

          this.checkLevel();
        } // Если в поле есть противник атакуем


        if (hero && hero.character.player === _side__WEBPACK_IMPORTED_MODULE_7__["default"].COMP && this.gameState.availableAttack.includes(index)) {
          this.attack(hero, this.gameState.selectedHero, index);
        } // Сообщение


        if (hero && hero.character.player === _side__WEBPACK_IMPORTED_MODULE_7__["default"].COMP && !this.gameState.availableAttack.includes(index)) {
          this.gamePlay.showPopup('Нужно подойти ближе');
        }

        return;
      } // Сообщения об ошибке


      if (!this.gameState.selectedHero && hero && hero.character.player === _side__WEBPACK_IMPORTED_MODULE_7__["default"].COMP) {
        var type = hero.character.type;
        type = type[0].toUpperCase() + type.slice(1);
        this.gamePlay.showPopup("\u042D\u0442\u043E ".concat(type, "! \u041E\u043D \u044F\u0432\u043D\u043E \u043D\u0435 \u0438\u0437 \u043D\u0430\u0448\u0438\u0445!"));
      } // if (!this.gameState.selectedHero && !hero) {
      //   // GamePlay.showError('Тут никого нет');
      //   this.gamePlay.showPopup('Тут никого нет');
      // }

    }
    /**
     * Действие при уходе с ячейки
     * @param {*} index - индекс ячейки
     */

  }, {
    key: "onCellLeave",
    value: function onCellLeave(index) {
      // TODO: react to mouse leave
      this.gamePlay.hideCellTooltip(index); // Чтобы не убиралось выделение активного игрока

      if (this.gameState.selectedHero && this.gameState.selectedHero.position !== index) {
        this.gamePlay.deselectCell(index);
      }
    }
    /**
     * Действие при наведении на ячейку
     * @param {*} index - индекс ячейки
     */

  }, {
    key: "onCellEnter",
    value: function onCellEnter(index) {
      // Проверяем наличие персонажа в ячейке поля
      var hero = this.gameState.teams.find(function (elem) {
        return elem.position === index;
      });

      if (hero) {
        var toolTip = this.constructor.createToolTipTemplate.call(this, hero);
        this.gamePlay.showCellTooltip(toolTip, index);
      } // Меняем тип курсора,если нет выбранного персонажа


      this.activeCursor(hero); // Изменение типа курсора и подсветка ячейки хода/атаки при выбранном персонаже

      if (this.gameState.selectedHero) {
        this.activeCursorSelectedHero(index, hero);
      }
    }
    /**
     * Формирует шаблон всплывающей информации о персонаже
     * @param {*} hero - объект с характеристиками персонажа
     * @returns - шаблон (строка)
     */

  }, {
    key: "activeCursor",
    value:
    /**
     * Устанавливает курсор, если нет выбранного персонажа
     * @param {*} hero - объект с характеристиками персонажа
     */
    function activeCursor(hero) {
      if (hero) {
        var pointer = hero.character.player === _side__WEBPACK_IMPORTED_MODULE_7__["default"].USER ? _cursors__WEBPACK_IMPORTED_MODULE_6__["default"].pointer : _cursors__WEBPACK_IMPORTED_MODULE_6__["default"].notallowed;
        this.gamePlay.setCursor(pointer);
      } else {
        this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_6__["default"].auto);
      }
    }
    /**
     * Изменяет типа курсора и подсветку ячейки хода/атаки при выбранном персонаже
     * @param {*} index - индекс ячейки
     * @param {*} hero - объект с характеристиками персонажа
     */

  }, {
    key: "activeCursorSelectedHero",
    value: function activeCursorSelectedHero(index, hero) {
      if (this.gameState.availableSteps.includes(index) && !hero) {
        this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_6__["default"].pointer);
        this.gamePlay.selectCell(index, 'green');
      } else if (hero && hero.character.player === _side__WEBPACK_IMPORTED_MODULE_7__["default"].COMP && this.gameState.availableAttack.includes(index)) {
        this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_6__["default"].crosshair);
        this.gamePlay.selectCell(index, 'red');
      } else if (hero && hero.character.player === _side__WEBPACK_IMPORTED_MODULE_7__["default"].USER) {
        this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_6__["default"].pointer);
      } else {
        this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_6__["default"].notallowed);
      }
    }
    /**
     * Сохранение игры
     */

  }, {
    key: "saveGame",
    value: function saveGame() {
      this.stateService.save(this.gameState); // GamePlay.showMessage('Игра сохранена');

      this.gamePlay.showPopup('Игра сохранена');
    }
    /**
     * Загрузка сохраненной игры, если такая есть
     */

  }, {
    key: "loadGame",
    value: function loadGame() {
      // Чтобы не добавлялись лишние события при загрузке во время игры
      if (this.gamePlay.cellClickListeners.length === 0) {
        this.checkCell();
      }

      try {
        var load = this.stateService.load();

        if (load) {
          this.gameState = _GameState__WEBPACK_IMPORTED_MODULE_8__["default"].from(load);
          this.gamePlay.drawUi(Object.values(_themes__WEBPACK_IMPORTED_MODULE_5__["default"])[this.gameState.stage - 1]);
          this.gamePlay.redrawPositions(this.gameState.teams);
        } else {
          this.newGame();
        }
      } catch (error) {
        // localStorage.removeItem('state');
        this.constructor.clearLocalStorage('state');
        this.gamePlay.showPopup("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438: \"".concat(error.message, "\""));
        this.newGame();
      }
    }
    /**
     * Новая игра сначала
     */

  }, {
    key: "newGame",
    value: function newGame() {
      if (this.gamePlay.cellClickListeners.length === 0) {
        this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
      }

      var totalScores = this.gameState ? this.gameState.scores : 0;
      this.gameState = new _GameState__WEBPACK_IMPORTED_MODULE_8__["default"](1, [], _side__WEBPACK_IMPORTED_MODULE_7__["default"].USER, totalScores);
      this.nextStage(this.gameState.stage);
    }
    /**
     * Переход хода
     */

  }, {
    key: "nextPlayer",
    value: function nextPlayer() {
      this.gameState.motion = this.gameState.motion === _side__WEBPACK_IMPORTED_MODULE_7__["default"].USER ? _side__WEBPACK_IMPORTED_MODULE_7__["default"].COMP : _side__WEBPACK_IMPORTED_MODULE_7__["default"].USER; // console.log('Ход переходит к:', this.gameState.motion);

      if (this.gameState.motion === _side__WEBPACK_IMPORTED_MODULE_7__["default"].COMP) {
        this.computerLogic();
      }

      this.gameState.clear();
    }
    /**
     * Проверка окончания уровня
     */

  }, {
    key: "checkLevel",
    value: function checkLevel() {
      var userValue = this.gameState.teams.some(function (member) {
        return member.character.player === _side__WEBPACK_IMPORTED_MODULE_7__["default"].USER;
      });
      var computerValue = this.gameState.teams.some(function (member) {
        return member.character.player === _side__WEBPACK_IMPORTED_MODULE_7__["default"].COMP;
      });

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

  }, {
    key: "nextStage",
    value: function nextStage(stage) {
      if (stage === 1) {
        this.constructor.teamGeneration.call(this, userTypes, _side__WEBPACK_IMPORTED_MODULE_7__["default"].USER, 1, 2);
        this.constructor.teamGeneration.call(this, computerTypes, _side__WEBPACK_IMPORTED_MODULE_7__["default"].COMP, 1, 2);
      }

      if (stage > 1 && stage < 5) {
        // Повышаем уровень оставшихся
        this.constructor.levelUp.call(this); // + к команде user

        var count = stage === 2 ? 1 : 2;
        this.constructor.teamGeneration.call(this, userTypes, _side__WEBPACK_IMPORTED_MODULE_7__["default"].USER, stage - 1, count); // новая команда компа

        var userCount = this.gameState.teams.filter(function (member) {
          return member.character.player === _side__WEBPACK_IMPORTED_MODULE_7__["default"].USER;
        }).length;
        this.constructor.teamGeneration.call(this, computerTypes, _side__WEBPACK_IMPORTED_MODULE_7__["default"].COMP, stage, userCount);
        this.gamePlay.showPopup("\u0423\u0440\u043E\u0432\u0435\u043D\u044C ".concat(stage, " \u0421\u0447\u0435\u0442: ").concat(this.gameState.scores));
      }

      if (stage >= 5) {
        // Блокировка поля
        this.gamePlay.cellClickListeners.length = 0; // GamePlay.showMessage(`Победа! Игра окончена. Счет: ${this.gameState.scores}`);

        this.gamePlay.showPopup("\u041F\u043E\u0431\u0435\u0434\u0430! \u0418\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430. \u0421\u0447\u0435\u0442: ".concat(this.gameState.scores));
      } else {
        this.gamePlay.drawUi(Object.values(_themes__WEBPACK_IMPORTED_MODULE_5__["default"])[this.gameState.stage - 1]);
        this.gamePlay.redrawPositions(this.gameState.teams); // this.gamePlay.showPopup(`Уровень ${stage} Счет: ${this.gameState.scores}`);
      }
    }
    /**
     * Атака, расчет, выделение, удаление погибшего героя
     */

  }, {
    key: "attack",
    value: function () {
      var _attack = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(attacked, attacker, indexAttacked) {
        var attack, defense, attackedUnit, damage;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Значение атаки атакующего персонажа
                attack = attacker.character.attack; // Значение защиты атакуемого

                defense = attacked.character.defense; // Атакуемый персонаж

                attackedUnit = attacked.character; // Урон от атаки

                damage = 2 * Math.round(Math.max((attack - defense, attack * 0.1)));
                attackedUnit.health -= damage; // Проверка убит ли герой

                if (attacked.character.health <= 0) {
                  this.gameState.removeHero(indexAttacked);
                } // Выделяем атакующего и атакуемого героя


                this.gamePlay.selectCell(attacker.position);
                this.gamePlay.selectCell(attacked.position, 'red'); // Обновляем поле

                this.gamePlay.redrawPositions(this.gameState.teams); // Чтобы не было выделения ячеек при анимации

                this.gameState.selectedHero = null; // Отображаем уровень урона анимацией

                _context.next = 12;
                return this.gamePlay.showDamage(indexAttacked, damage);

              case 12:
                // Снимаем выделение с атакующего и атакуемого героя
                this.gamePlay.deselectCell(attacker.position);
                this.gamePlay.deselectCell(attacked.position);
                this.checkLevel();

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function attack(_x, _x2, _x3) {
        return _attack.apply(this, arguments);
      }

      return attack;
    }()
    /**
     * Логика хода и атаки компьютера
     */

  }, {
    key: "computerLogic",
    value: function computerLogic() {
      var _this = this;

      var teams = this.gameState.teams;
      var computerTeams = teams.filter(function (member) {
        return member.character.player === _side__WEBPACK_IMPORTED_MODULE_7__["default"].COMP;
      });
      var userTeams = teams.filter(function (member) {
        return member.character.player === _side__WEBPACK_IMPORTED_MODULE_7__["default"].USER;
      }); // Проверяем возможность атаки

      var attack = computerTeams.some(function (compUnit) {
        _this.gameState.availableAttack = (0,_generators__WEBPACK_IMPORTED_MODULE_16__.getAvailableAttack)(compUnit.position, compUnit.character.attackRadius);
        var attacked = userTeams.find(function (userUnit) {
          return _this.gameState.availableAttack.includes(userUnit.position);
        });

        if (attacked) {
          _this.attack(attacked, compUnit, attacked.position);

          return true;
        }

        return false;
      }); // Ход computer

      if (!attack && computerTeams.length && userTeams.length) {
        var unit = Math.floor(Math.random() * computerTeams.length);
        var steps = (0,_generators__WEBPACK_IMPORTED_MODULE_16__.getAvailableDistance)(computerTeams[unit].position, computerTeams[unit].character.stepsRadius);
        var step = Math.floor(Math.random() * steps.length);
        computerTeams[unit].position = steps[step];
        this.checkLevel();
        this.gamePlay.redrawPositions(this.gameState.teams);
      }
    }
    /**
     * Повышает уровень членов команды
     */

  }], [{
    key: "createToolTipTemplate",
    value: function createToolTipTemplate(hero) {
      var _hero$character = hero.character,
          level = _hero$character.level,
          health = _hero$character.health,
          attack = _hero$character.attack,
          defence = _hero$character.defence;
      return "\uD83C\uDF96 ".concat(level, " \u2694 ").concat(attack, " \uD83D\uDEE1 ").concat(defence, " \u2764 ").concat(health);
    }
  }, {
    key: "levelUp",
    value: function levelUp() {
      var _iterator = _createForOfIteratorHelper(this.gameState.teams),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var member = _step.value;
          var parameter = member.character;
          member.position = (0,_generators__WEBPACK_IMPORTED_MODULE_16__.startFieldGenerator)(_side__WEBPACK_IMPORTED_MODULE_7__["default"].USER); // Возвращаем игроков с свои поля

          parameter.level += 1;
          parameter.health = parameter.health + 80 >= 100 ? 100 : parameter.health + 80;
          parameter.attack = Math.floor(Math.max(parameter.attack, parameter.attack * (0.8 + parameter.health / 100)));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     *  Генератор стартовых команд (два не могут быть на одном поле)
     * @param {*} teamType - Массив допустимых классов игрока
     * @param {*} prayer - Тип игрока 'user' или 'computer'
     * @returns - Массив объектов типа PositionedCharacter
     */

  }, {
    key: "teamGeneration",
    value: function teamGeneration(teamType, prayer, maxLevel, count) {
      var _this$gameState$teams;

      // Генерируем новую команду
      var newTeam = (0,_generators__WEBPACK_IMPORTED_MODULE_16__.generateTeam)(teamType, maxLevel, count); // Список занятых на поле позиций

      var positionList = [];

      if (this.gameState.teams.length) {
        this.gameState.teams.forEach(function (elem) {
          return positionList.push(elem.position);
        });
      } // Добавляем позиции новым персонажам


      newTeam = newTeam.toArray.reduce(function (acc, member) {
        // Случайная позиция персонажа из списка доступных
        var randomNumber = (0,_generators__WEBPACK_IMPORTED_MODULE_16__.startFieldGenerator)(prayer); // Если есть такая позиция уже есть генерируем новую

        while (positionList.includes(randomNumber)) {
          randomNumber = (0,_generators__WEBPACK_IMPORTED_MODULE_16__.startFieldGenerator)(prayer);
        }

        positionList.push(randomNumber);
        acc.push(new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_9__["default"](member, randomNumber));
        return acc;
      }, []);

      (_this$gameState$teams = this.gameState.teams).push.apply(_this$gameState$teams, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newTeam));
    }
    /**
    * Очищает локальное хранилище
    * @param {string} key - значение по которому очистить localStorage;
    */

  }, {
    key: "clearLocalStorage",
    value: function clearLocalStorage(key) {
      localStorage.removeItem(key);
    }
  }]);

  return GameController;
}();



/***/ }),

/***/ "./src/js/GamePlay.js":
/*!****************************!*\
  !*** ./src/js/GamePlay.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GamePlay; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");




function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var GamePlay = /*#__PURE__*/function () {
  function GamePlay() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GamePlay);

    this.boardSize = 8;
    this.container = null;
    this.popup = null;
    this.boardEl = null; // Поле

    this.cells = []; // Элементы поля

    this.cellClickListeners = [];
    this.cellEnterListeners = [];
    this.cellLeaveListeners = [];
    this.newGameListeners = [];
    this.saveGameListeners = [];
    this.loadGameListeners = [];
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GamePlay, [{
    key: "bindToDOM",
    value: function bindToDOM(container) {
      if (!(container instanceof HTMLElement)) {
        throw new Error('container is not HTMLElement');
      }

      this.container = container;
    }
  }, {
    key: "bindPopup",
    value: function bindPopup(popup) {
      if (!(popup instanceof HTMLElement)) {
        throw new Error('container is not HTMLElement');
      }

      this.popup = popup;
    }
    /**
     * Draws boardEl with specific theme
     *
     * @param theme
     */

  }, {
    key: "drawUi",
    value: function drawUi(theme) {
      var _this = this;

      this.checkBinding();
      this.container.innerHTML = "\n      <div class=\"controls\">\n        <button data-id=\"action-restart\" class=\"btn\">New Game</button>\n        <button data-id=\"action-save\" class=\"btn\">Save Game</button>\n        <button data-id=\"action-load\" class=\"btn\">Load Game</button>\n      </div>\n      <div class=\"board-container\">\n        <div data-id=\"board\" class=\"board\"></div>\n      </div>\n    ";
      this.newGameEl = this.container.querySelector('[data-id=action-restart]');
      this.saveGameEl = this.container.querySelector('[data-id=action-save]');
      this.loadGameEl = this.container.querySelector('[data-id=action-load]');
      this.popupCloseButton = this.popup.querySelector('.popup__button');
      this.newGameEl.addEventListener('click', function (event) {
        return _this.onNewGameClick(event);
      });
      this.saveGameEl.addEventListener('click', function (event) {
        return _this.onSaveGameClick(event);
      });
      this.loadGameEl.addEventListener('click', function (event) {
        return _this.onLoadGameClick(event);
      });
      this.popupCloseButton.addEventListener('click', function () {
        return _this.closePopup();
      });
      this.boardEl = this.container.querySelector('[data-id=board]');
      this.boardEl.classList.add(theme);

      for (var i = 0; i < Math.pow(this.boardSize, 2); i += 1) {
        var cellEl = document.createElement('div');
        cellEl.classList.add('cell', 'map-tile', "map-tile-".concat((0,_utils__WEBPACK_IMPORTED_MODULE_3__.calcTileType)(i, this.boardSize)));
        cellEl.addEventListener('mouseenter', function (event) {
          return _this.onCellEnter(event);
        });
        cellEl.addEventListener('mouseleave', function (event) {
          return _this.onCellLeave(event);
        });
        cellEl.addEventListener('click', function (event) {
          return _this.onCellClick(event);
        });
        this.boardEl.appendChild(cellEl);
      }

      this.cells = Array.from(this.boardEl.children);
    }
    /**
     * Draws positions (with chars) on boardEl
     *
     * @param positions array of PositionedCharacter objects
     */

  }, {
    key: "redrawPositions",
    value: function redrawPositions(positions) {
      var _iterator = _createForOfIteratorHelper(this.cells),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cell = _step.value;
          cell.innerHTML = '';
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(positions),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var position = _step2.value;
          var cellEl = this.boardEl.children[position.position];
          var charEl = document.createElement('div');
          charEl.classList.add('character', position.character.type);
          var healthEl = document.createElement('div');
          healthEl.classList.add('health-level');
          var healthIndicatorEl = document.createElement('div');
          healthIndicatorEl.classList.add('health-level-indicator', "health-level-indicator-".concat((0,_utils__WEBPACK_IMPORTED_MODULE_3__.calcHealthLevel)(position.character.health)));
          healthIndicatorEl.style.width = "".concat(position.character.health, "%");
          healthEl.appendChild(healthIndicatorEl);
          charEl.appendChild(healthEl);
          cellEl.appendChild(charEl);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * Add listener to mouse enter for cell
     *
     * @param callback
     */

  }, {
    key: "addCellEnterListener",
    value: function addCellEnterListener(callback) {
      this.cellEnterListeners.push(callback);
    }
    /**
     * Add listener to mouse leave for cell
     *
     * @param callback
     */

  }, {
    key: "addCellLeaveListener",
    value: function addCellLeaveListener(callback) {
      this.cellLeaveListeners.push(callback);
    }
    /**
     * Add listener to mouse click for cell
     *
     * @param callback
     */

  }, {
    key: "addCellClickListener",
    value: function addCellClickListener(callback) {
      this.cellClickListeners.push(callback);
    }
    /**
     * Add listener to "New Game" button click
     *
     * @param callback
     */

  }, {
    key: "addNewGameListener",
    value: function addNewGameListener(callback) {
      this.newGameListeners.push(callback);
    }
    /**
     * Add listener to "Save Game" button click
     *
     * @param callback
     */

  }, {
    key: "addSaveGameListener",
    value: function addSaveGameListener(callback) {
      this.saveGameListeners.push(callback);
    }
    /**
     * Add listener to "Load Game" button click
     *
     * @param callback
     */

  }, {
    key: "addLoadGameListener",
    value: function addLoadGameListener(callback) {
      this.loadGameListeners.push(callback);
    }
  }, {
    key: "onCellEnter",
    value: function onCellEnter(event) {
      event.preventDefault();
      var index = this.cells.indexOf(event.currentTarget);
      this.cellEnterListeners.forEach(function (o) {
        return o.call(null, index);
      });
    }
  }, {
    key: "onCellLeave",
    value: function onCellLeave(event) {
      event.preventDefault();
      var index = this.cells.indexOf(event.currentTarget);
      this.cellLeaveListeners.forEach(function (o) {
        return o.call(null, index);
      });
    }
  }, {
    key: "onCellClick",
    value: function onCellClick(event) {
      var index = this.cells.indexOf(event.currentTarget);
      this.cellClickListeners.forEach(function (o) {
        return o.call(null, index);
      });
    }
  }, {
    key: "onNewGameClick",
    value: function onNewGameClick(event) {
      event.preventDefault();
      this.newGameListeners.forEach(function (o) {
        return o.call(null);
      });
    }
  }, {
    key: "onSaveGameClick",
    value: function onSaveGameClick(event) {
      event.preventDefault();
      this.saveGameListeners.forEach(function (o) {
        return o.call(null);
      });
    }
  }, {
    key: "onLoadGameClick",
    value: function onLoadGameClick(event) {
      event.preventDefault();
      this.loadGameListeners.forEach(function (o) {
        return o.call(null);
      });
    }
  }, {
    key: "selectCell",
    value: function selectCell(index) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yellow';
      this.deselectCell(index);
      this.cells[index].classList.add('selected', "selected-".concat(color));
    }
  }, {
    key: "deselectCell",
    value: function deselectCell(index) {
      var _cell$classList;

      var cell = this.cells[index];

      (_cell$classList = cell.classList).remove.apply(_cell$classList, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array.from(cell.classList).filter(function (o) {
        return o.startsWith('selected');
      })));
    }
  }, {
    key: "showCellTooltip",
    value: function showCellTooltip(message, index) {
      this.cells[index].title = message;
    }
  }, {
    key: "hideCellTooltip",
    value: function hideCellTooltip(index) {
      this.cells[index].title = '';
    }
  }, {
    key: "showDamage",
    value: function showDamage(index, damage) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var cell = _this2.cells[index];
        var damageEl = document.createElement('span');
        damageEl.textContent = damage;
        damageEl.classList.add('damage');
        cell.appendChild(damageEl);
        damageEl.addEventListener('animationend', function () {
          cell.removeChild(damageEl);
          resolve();
        });
      });
    }
  }, {
    key: "setCursor",
    value: function setCursor(cursor) {
      this.boardEl.style.cursor = cursor;
    }
  }, {
    key: "checkBinding",
    value: function checkBinding() {
      if (this.container === null) {
        throw new Error('GamePlay not bind to DOM');
      }
    } // Закрывает Popup

  }, {
    key: "closePopup",
    value: function closePopup() {
      this.popup.classList.add('popup_hidden');
    } // Показывает Popup

  }, {
    key: "showPopup",
    value: function showPopup(message) {
      var title = this.popup.querySelector('.popup__title');
      title.textContent = message;
      this.popup.classList.remove('popup_hidden');
    }
  }], [{
    key: "showError",
    value: function showError(message) {
      alert(message);
    }
  }, {
    key: "showMessage",
    value: function showMessage(message) {
      alert(message);
    }
  }]);

  return GamePlay;
}();



/***/ }),

/***/ "./src/js/GameState.js":
/*!*****************************!*\
  !*** ./src/js/GameState.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GameState; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var GameState = /*#__PURE__*/function () {
  function GameState(stage, teams, motion, scores) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GameState);

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


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GameState, [{
    key: "clear",
    value: function clear() {
      this.availableSteps = null;
      this.availableAttack = null;
      this.selectedHero = null;
    }
    /**
     * Удаляет героя из команды по индексу
     * @param {*} index - Индекс
     */

  }, {
    key: "removeHero",
    value: function removeHero(index) {
      this.teams = this.teams.filter(function (member) {
        return member.position !== index;
      });
    }
    /**
     * Считает и добавляет очки за раунд
     */

  }, {
    key: "addScores",
    value: function addScores() {
      var sum = this.teams.reduce(function (acc, member) {
        if (member.character.player === 'user') {
          return acc + member.character.health;
        }

        return acc;
      }, 0);
      this.scores += sum;
    }
  }], [{
    key: "from",
    value: function from(object) {
      // TODO: create object
      var stage = object.stage,
          teams = object.teams,
          motion = object.motion,
          scores = object.scores;
      return new GameState(stage, teams, motion, scores);
    }
  }]);

  return GameState;
}();



/***/ }),

/***/ "./src/js/GameStateService.js":
/*!************************************!*\
  !*** ./src/js/GameStateService.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GameStateService; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var GameStateService = /*#__PURE__*/function () {
  function GameStateService(storage) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GameStateService);

    this.storage = storage;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GameStateService, [{
    key: "save",
    value: function save(state) {
      this.storage.setItem('state', JSON.stringify(state));
    }
  }, {
    key: "load",
    value: function load() {
      try {
        return JSON.parse(this.storage.getItem('state'));
      } catch (e) {
        throw new Error('Invalid state');
      }
    }
  }]);

  return GameStateService;
}();



/***/ }),

/***/ "./src/js/Heroes/Bowman.js":
/*!*********************************!*\
  !*** ./src/js/Heroes/Bowman.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Bowman; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Character */ "./src/js/Character.js");
/* harmony import */ var _heroesCharacteristic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../heroesCharacteristic */ "./src/js/heroesCharacteristic.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Bowman = /*#__PURE__*/function (_Character) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Bowman, _Character);

  var _super = _createSuper(Bowman);

  function Bowman(level) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Bowman);

    var _heroesConfig$new$tar = _heroesCharacteristic__WEBPACK_IMPORTED_MODULE_6__["default"][(this instanceof Bowman ? this.constructor : void 0).name],
        type = _heroesConfig$new$tar.type,
        attack = _heroesConfig$new$tar.attack,
        defence = _heroesConfig$new$tar.defence,
        player = _heroesConfig$new$tar.player,
        stepsRadius = _heroesConfig$new$tar.stepsRadius,
        attackRadius = _heroesConfig$new$tar.attackRadius;
    _this = _super.call(this, level, attack, defence, player, stepsRadius, attackRadius);
    _this.type = type;
    return _this;
  }

  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Bowman);
}(_Character__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/js/Heroes/Daemon.js":
/*!*********************************!*\
  !*** ./src/js/Heroes/Daemon.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Daemon; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Character */ "./src/js/Character.js");
/* harmony import */ var _heroesCharacteristic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../heroesCharacteristic */ "./src/js/heroesCharacteristic.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Daemon = /*#__PURE__*/function (_Character) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Daemon, _Character);

  var _super = _createSuper(Daemon);

  function Daemon(level) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Daemon);

    var _heroesConfig$new$tar = _heroesCharacteristic__WEBPACK_IMPORTED_MODULE_6__["default"][(this instanceof Daemon ? this.constructor : void 0).name],
        type = _heroesConfig$new$tar.type,
        attack = _heroesConfig$new$tar.attack,
        defence = _heroesConfig$new$tar.defence,
        player = _heroesConfig$new$tar.player,
        stepsRadius = _heroesConfig$new$tar.stepsRadius,
        attackRadius = _heroesConfig$new$tar.attackRadius;
    _this = _super.call(this, level, attack, defence, player, stepsRadius, attackRadius);
    _this.type = type;
    return _this;
  }

  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Daemon);
}(_Character__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/js/Heroes/Magician.js":
/*!***********************************!*\
  !*** ./src/js/Heroes/Magician.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Magician; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Character */ "./src/js/Character.js");
/* harmony import */ var _heroesCharacteristic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../heroesCharacteristic */ "./src/js/heroesCharacteristic.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Magician = /*#__PURE__*/function (_Character) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Magician, _Character);

  var _super = _createSuper(Magician);

  function Magician(level) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Magician);

    var _heroesConfig$new$tar = _heroesCharacteristic__WEBPACK_IMPORTED_MODULE_6__["default"][(this instanceof Magician ? this.constructor : void 0).name],
        type = _heroesConfig$new$tar.type,
        attack = _heroesConfig$new$tar.attack,
        defence = _heroesConfig$new$tar.defence,
        player = _heroesConfig$new$tar.player,
        stepsRadius = _heroesConfig$new$tar.stepsRadius,
        attackRadius = _heroesConfig$new$tar.attackRadius;
    _this = _super.call(this, level, attack, defence, player, stepsRadius, attackRadius);
    _this.type = type;
    return _this;
  }

  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Magician);
}(_Character__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/js/Heroes/Swordsman.js":
/*!************************************!*\
  !*** ./src/js/Heroes/Swordsman.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Swordsman; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Character */ "./src/js/Character.js");
/* harmony import */ var _heroesCharacteristic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../heroesCharacteristic */ "./src/js/heroesCharacteristic.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Swordsman = /*#__PURE__*/function (_Character) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Swordsman, _Character);

  var _super = _createSuper(Swordsman);

  function Swordsman(level) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Swordsman);

    var _heroesConfig$new$tar = _heroesCharacteristic__WEBPACK_IMPORTED_MODULE_6__["default"][(this instanceof Swordsman ? this.constructor : void 0).name],
        type = _heroesConfig$new$tar.type,
        attack = _heroesConfig$new$tar.attack,
        defence = _heroesConfig$new$tar.defence,
        player = _heroesConfig$new$tar.player,
        stepsRadius = _heroesConfig$new$tar.stepsRadius,
        attackRadius = _heroesConfig$new$tar.attackRadius;
    _this = _super.call(this, level, attack, defence, player, stepsRadius, attackRadius);
    _this.type = type;
    return _this;
  }

  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Swordsman);
}(_Character__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/js/Heroes/Undead.js":
/*!*********************************!*\
  !*** ./src/js/Heroes/Undead.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Undead; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Character */ "./src/js/Character.js");
/* harmony import */ var _heroesCharacteristic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../heroesCharacteristic */ "./src/js/heroesCharacteristic.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Undead = /*#__PURE__*/function (_Character) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Undead, _Character);

  var _super = _createSuper(Undead);

  function Undead(level) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Undead);

    var _heroesConfig$new$tar = _heroesCharacteristic__WEBPACK_IMPORTED_MODULE_6__["default"][(this instanceof Undead ? this.constructor : void 0).name],
        type = _heroesConfig$new$tar.type,
        attack = _heroesConfig$new$tar.attack,
        defence = _heroesConfig$new$tar.defence,
        player = _heroesConfig$new$tar.player,
        stepsRadius = _heroesConfig$new$tar.stepsRadius,
        attackRadius = _heroesConfig$new$tar.attackRadius;
    _this = _super.call(this, level, attack, defence, player, stepsRadius, attackRadius);
    _this.type = type;
    return _this;
  }

  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Undead);
}(_Character__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/js/Heroes/Vampire.js":
/*!**********************************!*\
  !*** ./src/js/Heroes/Vampire.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Vampire; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Character */ "./src/js/Character.js");
/* harmony import */ var _heroesCharacteristic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../heroesCharacteristic */ "./src/js/heroesCharacteristic.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Vampire = /*#__PURE__*/function (_Character) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Vampire, _Character);

  var _super = _createSuper(Vampire);

  function Vampire(level) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Vampire);

    var _heroesConfig$new$tar = _heroesCharacteristic__WEBPACK_IMPORTED_MODULE_6__["default"][(this instanceof Vampire ? this.constructor : void 0).name],
        type = _heroesConfig$new$tar.type,
        attack = _heroesConfig$new$tar.attack,
        defence = _heroesConfig$new$tar.defence,
        player = _heroesConfig$new$tar.player,
        stepsRadius = _heroesConfig$new$tar.stepsRadius,
        attackRadius = _heroesConfig$new$tar.attackRadius;
    _this = _super.call(this, level, attack, defence, player, stepsRadius, attackRadius);
    _this.type = type;
    return _this;
  }

  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Vampire);
}(_Character__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/js/PositionedCharacter.js":
/*!***************************************!*\
  !*** ./src/js/PositionedCharacter.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PositionedCharacter; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Character */ "./src/js/Character.js");




var PositionedCharacter = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function PositionedCharacter(character, position) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PositionedCharacter);

  if (!(character instanceof _Character__WEBPACK_IMPORTED_MODULE_2__["default"])) {
    throw new Error('character must be instance of Character or its children');
  }

  if (typeof position !== 'number') {
    throw new Error('position must be a number');
  }

  this.character = character;
  this.position = position;
});



/***/ }),

/***/ "./src/js/Team.js":
/*!************************!*\
  !*** ./src/js/Team.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Team; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");




var Team = /*#__PURE__*/function () {
  function Team() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Team);

    this.members = new Set();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Team, [{
    key: "add",
    value: function add(member) {
      this.members.add(member);
    }
  }, {
    key: "toArray",
    get: function get() {
      return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.members);
    }
  }]);

  return Team;
}();



/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GamePlay */ "./src/js/GamePlay.js");
/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameController */ "./src/js/GameController.js");
/* harmony import */ var _GameStateService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameStateService */ "./src/js/GameStateService.js");
/**
 * Entry point of app: don't change this
 */



var gamePlay = new _GamePlay__WEBPACK_IMPORTED_MODULE_0__["default"]();
gamePlay.bindToDOM(document.querySelector('#game-container'));
gamePlay.bindPopup(document.querySelector('#popup'));
var stateService = new _GameStateService__WEBPACK_IMPORTED_MODULE_2__["default"](localStorage);
var gameCtrl = new _GameController__WEBPACK_IMPORTED_MODULE_1__["default"](gamePlay, stateService);
gameCtrl.init();

/***/ }),

/***/ "./src/js/cursors.js":
/*!***************************!*\
  !*** ./src/js/cursors.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cursors = {
  auto: 'auto',
  pointer: 'pointer',
  crosshair: 'crosshair',
  notallowed: 'not-allowed'
};
/* harmony default export */ __webpack_exports__["default"] = (cursors);

/***/ }),

/***/ "./src/js/generators.js":
/*!******************************!*\
  !*** ./src/js/generators.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "characterGenerator": function() { return /* binding */ characterGenerator; },
/* harmony export */   "generateTeam": function() { return /* binding */ generateTeam; },
/* harmony export */   "getAvailableAttack": function() { return /* binding */ getAvailableAttack; },
/* harmony export */   "getAvailableDistance": function() { return /* binding */ getAvailableDistance; },
/* harmony export */   "startFieldGenerator": function() { return /* binding */ startFieldGenerator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Team */ "./src/js/Team.js");
/* harmony import */ var _side__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side */ "./src/js/side.js");



/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

function characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  var randomType = Math.floor(Math.random() * allowedTypes.length);
  var randomLevel = Math.floor(Math.random() * maxLevel) + 1;
  return new allowedTypes[randomType](randomLevel);
}
function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  var team = new _Team__WEBPACK_IMPORTED_MODULE_1__["default"]();

  for (var i = 0; i < characterCount; i += 1) {
    team.add(characterGenerator(allowedTypes, maxLevel));
  }

  return team;
}
/**
 * Генерирует случное поле для первого уровня
 * @param {*} player - Игрок 'user' или 'computer'
 * @returns номер поля :number
 */

function startFieldGenerator(player) {
  var boardSize = 8;
  var cellsCount = Math.pow(boardSize, 2) - 1;
  var validateCells = [];
  var startCell = player === _side__WEBPACK_IMPORTED_MODULE_2__["default"].USER ? 0 : boardSize - 2;

  for (var i = startCell; i <= cellsCount; i += boardSize) {
    validateCells.push(i, i + 1);
  } // Для случайного номера ячейки


  var randomIndex = Math.floor(Math.random() * validateCells.length);
  return validateCells[randomIndex];
}
/**
 * Генерирует массив возможных вариантов хода
 * @param {number} index - Текущее положение
 * @param {number} radius - Радиус хода
 * @returns {Array} - Массив чисел
 */

function getAvailableDistance(index, radius) {
  var allowableSteps = new Set();
  var topCell = index;
  var bottomCell = index;
  var leftCell = index;
  var rightCell = index; // Верхнее значение

  while (topCell > index - radius * 8 && topCell - 8 >= 0) {
    topCell -= 8;
  } // Нижнее значение


  while (bottomCell < index + radius * 8 && bottomCell + 8 < 64) {
    bottomCell += 8;
  } // Левое значение


  while (leftCell > index - radius && leftCell % 8 !== 0) {
    leftCell -= 1;
  } // Правое значение


  while (rightCell < index + radius && (rightCell + 1) % 8 !== 0) {
    rightCell += 1;
  } // Строка


  for (var i = leftCell; i <= rightCell; i += 1) {
    allowableSteps.add(i);
  } // Столбец


  for (var _i = topCell; _i <= bottomCell; _i += 8) {
    allowableSteps.add(_i);
  } // Верхняя левая диагональ


  for (var _i2 = index; _i2 >= index - radius * 9; _i2 -= 9) {
    allowableSteps.add(_i2);
    if (_i2 % 8 === 0 || _i2 - 8 < 0) break;
  } // Правая нижняя диагональ


  for (var _i3 = index; _i3 <= index + radius * 9; _i3 += 9) {
    allowableSteps.add(_i3);
    if ((_i3 + 1) % 8 === 0 || _i3 + 8 > 64) break;
  } // Правая верхняя диагональ


  for (var _i4 = index; _i4 >= index - 7 * radius; _i4 -= 7) {
    allowableSteps.add(_i4);
    if ((_i4 + 1) % 8 === 0 || _i4 - 7 < 0) break;
  } // Нижняя левая диагональ


  for (var _i5 = index; _i5 <= index + radius * 7; _i5 += 7) {
    allowableSteps.add(_i5);
    if (_i5 % 8 === 0 || _i5 + 7 >= 64) break;
  }

  return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(allowableSteps).filter(function (num) {
    return num !== index;
  });
}
/**
 * Считает радиус атаки
 * @param {*} index - Номер текущей ячейки
 * @param {*} radius - Радиус атаки
 * @returns
 */

function getAvailableAttack(index, radius) {
  var allowableAttack = new Set();
  var leftCell = index;
  var rightCell = index;
  var startCell = null; // Левое значение

  while (leftCell > index - radius && leftCell % 8 !== 0) {
    leftCell -= 1;
  } // Правое значение


  while (rightCell < index + radius && (rightCell + 1) % 8 !== 0) {
    rightCell += 1;
  } // Общее


  startCell = leftCell;

  while (startCell <= rightCell) {
    var topValues = startCell;
    var bottomValues = startCell;
    allowableAttack.add(startCell); // Верхнее значение

    while (topValues > startCell - radius * 8 && topValues - 8 >= 0) {
      topValues -= 8;
      allowableAttack.add(topValues);
    } // Нижнее значение


    while (bottomValues < startCell + radius * 8 && bottomValues + 8 < 64) {
      bottomValues += 8;
      allowableAttack.add(bottomValues);
    }

    startCell += 1;
  }

  return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(allowableAttack);
}

/***/ }),

/***/ "./src/js/heroesCharacteristic.js":
/*!****************************************!*\
  !*** ./src/js/heroesCharacteristic.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var characteristicsOfHeroes = {
  Bowman: {
    type: 'bowman',
    attack: 25,
    defence: 25,
    player: 'user',
    stepsRadius: 2,
    attackRadius: 2
  },
  Daemon: {
    type: 'daemon',
    attack: 10,
    defence: 40,
    player: 'computer',
    stepsRadius: 1,
    attackRadius: 4
  },
  Magician: {
    type: 'magician',
    attack: 10,
    defence: 40,
    player: 'user',
    stepsRadius: 1,
    attackRadius: 4
  },
  Swordsman: {
    type: 'swordsman',
    attack: 40,
    defence: 10,
    player: 'user',
    stepsRadius: 4,
    attackRadius: 1
  },
  Undead: {
    type: 'undead',
    attack: 40,
    defence: 10,
    player: 'computer',
    stepsRadius: 4,
    attackRadius: 1
  },
  Vampire: {
    type: 'vampire',
    attack: 25,
    defence: 25,
    player: 'computer',
    stepsRadius: 2,
    attackRadius: 2
  }
};
/* harmony default export */ __webpack_exports__["default"] = (characteristicsOfHeroes);

/***/ }),

/***/ "./src/js/side.js":
/*!************************!*\
  !*** ./src/js/side.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var side = {
  COMP: 'computer',
  USER: 'user'
};
/* harmony default export */ __webpack_exports__["default"] = (side);

/***/ }),

/***/ "./src/js/themes.js":
/*!**************************!*\
  !*** ./src/js/themes.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var themes = {
  prairie: 'prairie',
  desert: 'desert',
  arctic: 'arctic',
  mountain: 'mountain'
};
/* harmony default export */ __webpack_exports__["default"] = (themes);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcHealthLevel": function() { return /* binding */ calcHealthLevel; },
/* harmony export */   "calcTileType": function() { return /* binding */ calcTileType; }
/* harmony export */ });
function calcTileType(index, boardSize) {
  switch (true) {
    case index === 0:
      return 'top-left';

    case index < boardSize - 1:
      return 'top';

    case index === boardSize - 1:
      return 'top-right';

    case index === Math.pow(boardSize, 2) - 1:
      return 'bottom-right';

    case (index + 1) % boardSize === 0:
      return 'right';

    case index > Math.pow(boardSize, 2) - boardSize:
      return 'bottom';

    case index === Math.pow(boardSize, 2) - boardSize:
      return 'bottom-left';

    case index % boardSize === 0:
      return 'left';

    default:
      return 'center';
  }
}
function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");

 // entry point for webpack
// don't write your code here
}();
/******/ })()
;
//# sourceMappingURL=app.d412c5f7517522020fec.js.map