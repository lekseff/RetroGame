import GameController from '../GameController';
import GamePlay from '../GamePlay';
import side from '../side';

const gamePlay = new GamePlay();
const gameController = new GameController(gamePlay, '');

jest.mock('../GamePlay');

test('Проверка шаблона информации', () => {
  const data = {
    character: {
      level: 1,
      health: 80,
      attack: 10,
      defence: 40,
    },
  };
  const received = GameController.createToolTipTemplate(data);
  const expected = '\u{1F396} 1 \u{2694} 10 \u{1F6E1} 40 \u{2764} 80';
  expect(received).toBe(expected);
});

describe('Проверка типов курсора', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Курсор над игроком user', () => {
    const data = {
      character: {
        player: side.USER,
      },
    };
    gameController.activeCursor(data);
    expect(gameController.gamePlay.setCursor).toBeCalledWith('pointer');
  });

  test('Курсор над computer', () => {
    const data = {
      character: {
        player: side.COMP,
      },
    };
    gameController.activeCursor(data);
    expect(gameController.gamePlay.setCursor).toBeCalledWith('not-allowed');
  });

  test('Курсор на пустым полем', () => {
    const data = undefined;
    gameController.activeCursor(data);
    expect(gameController.gamePlay.setCursor).toBeCalledWith('auto');
  });
});

describe('Выделение ячейки поля', () => {
  const index = 1;
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Выделение поля для хода', () => {
    const data = undefined;
    gameController.gameState = {
      availableSteps: [1],
      availableAttack: [2],
    };
    gameController.activeCursorSelectedHero(index, data);
    expect(gameController.gamePlay.setCursor).toBeCalledWith('pointer');
    expect(gameController.gamePlay.selectCell.mock.calls[0][1]).toBe('green');
  });

  test('Выделение поля для атаки', () => {
    const data = {
      character: {
        player: side.COMP,
      },
    };
    gameController.gameState = {
      availableSteps: [1],
      availableAttack: [1],
    };
    gameController.activeCursorSelectedHero(index, data);
    expect(gameController.gamePlay.setCursor).toBeCalledWith('crosshair');
    expect(gameController.gamePlay.selectCell.mock.calls[0][1]).toBe('red');
  });

  test('Не доступный вариант хода ', () => {
    const data = undefined;
    gameController.gameState = {
      availableSteps: [2],
      availableAttack: [2],
    };
    gameController.activeCursorSelectedHero(index, data);
    expect(gameController.gamePlay.setCursor).toBeCalledWith('not-allowed');
  });
});
