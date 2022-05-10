import GameController from '../GameController';
import GamePlay from '../GamePlay';
import side from '../side';

const gamePlay = new GamePlay();
const gameCtr = new GameController(gamePlay, '');

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

describe('Проверка типа курсора', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Курсор над игроком user', () => {
    const data = {
      character: {
        player: side.USER,
      },
    };
    gameCtr.activeCursor(data);
    expect(gameCtr.gamePlay.setCursor).toBeCalledWith('pointer');
  });

  test('Курсор над computer', () => {
    const data = {
      character: {
        player: side.COMP,
      },
    };
    gameCtr.activeCursor(data);
    expect(gameCtr.gamePlay.setCursor).toBeCalledWith('not-allowed');
  });

  test('Курсор на пустым полем', () => {
    const data = undefined;
    gameCtr.activeCursor(data);
    expect(gameCtr.gamePlay.setCursor).toBeCalledWith('auto');
  });

  // подсветка поля
});

// it('test', () => {
//   const gamePlay = new GamePlay();
//   const gameCtr = new GameController(gamePlay, '');
//   const gameState = {
//     teams: [
//       {
//         character: {
//           level: 1,
//           type: 'bowman',
//           health: 80,
//           attack: 10,
//           defence: 40,
//           player: 'user',
//           stepsRadius: 2,
//           attackRadius: 3,
//         },
//         position: 1,
//       },
//     ],
//   };

//   gameCtr.onCellEnter(1);
//   expect(gamePlay.setCursor).toHaveBeenCalledTimes(1);
// });

// describe('test', () => {
// const gameState = {
//   teams: [
//     {
//       character: {
//         level: 1,
//         type: 'bowman',
//         health: 80,
//         attack: 10,
//         defence: 40,
//         player: 'user',
//         stepsRadius: 2,
//         attackRadius: 3,
//       },
//       position: 1,
//     },
//   ],
// };

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test('pointer', () => {
//     const gamePlay = new GamePlay();
//     const gameController = new GameController(gamePlay, '');
//     const setCursorSpy = jest.spyOn(gameController.gamePlay, 'setCursor');
//     const onCellEnterSpy = jest.spyOn(gameController, 'onCellEnter');
//     gameController.onCellEnter(1);
//     expect(onCellEnterSpy).toHaveBeenCalledWith('pointer');
//   });
// });
