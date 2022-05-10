import GameStateService from '../GameStateService';
import GamePlay from '../GamePlay';
import GameController from '../GameController';

const storage = '';
const gamePlay = new GamePlay();
const stateService = new GameStateService(storage);
const gameController = new GameController(gamePlay, stateService);

jest.mock('../GamePlay');

test('Тест', () => {
  jest.resetAllMocks();
  gameController.gamePlay.cellClickListeners = [1, 2, 3];
  GameController.clearLocalStorage = jest.fn(() => {});
  gameController.loadGame();
  expect(gameController.gamePlay.showPopup).toBeCalledWith('Ошибка загрузки: "Invalid state"');
});
