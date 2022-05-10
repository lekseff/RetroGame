import Team from './Team';
import side from './side';
/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  const randomType = Math.floor(Math.random() * allowedTypes.length);
  const randomLevel = Math.floor(Math.random() * maxLevel) + 1;
  return new allowedTypes[randomType](randomLevel);
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = new Team();
  for (let i = 0; i < characterCount; i += 1) {
    team.add(characterGenerator(allowedTypes, maxLevel));
  }
  return team;
}

/**
 * Генерирует случное поле для первого уровня
 * @param {*} player - Игрок 'user' или 'computer'
 * @returns номер поля :number
 */
export function startFieldGenerator(player) {
  const boardSize = 8;
  const cellsCount = boardSize ** 2 - 1;
  const validateCells = [];
  const startCell = player === side.USER ? 0 : boardSize - 2;
  for (let i = startCell; i <= cellsCount; i += boardSize) {
    validateCells.push(i, i + 1);
  }

  // Для случайного номера ячейки
  const randomIndex = Math.floor(Math.random() * validateCells.length);
  return validateCells[randomIndex];
}

/**
 * Генерирует массив возможных вариантов хода
 * @param {number} index - Текущее положение
 * @param {number} radius - Радиус хода
 * @returns {Array} - Массив чисел
 */
export function getAvailableDistance(index, radius) {
  const allowableSteps = new Set();
  let topCell = index;
  let bottomCell = index;
  let leftCell = index;
  let rightCell = index;

  // Верхнее значение
  while (topCell > (index - radius * 8) && (topCell - 8) >= 0) {
    topCell -= 8;
  }

  // Нижнее значение
  while (bottomCell < (index + radius * 8) && (bottomCell + 8) < 64) {
    bottomCell += 8;
  }

  // Левое значение
  while (leftCell > index - radius && leftCell % 8 !== 0) {
    leftCell -= 1;
  }

  // Правое значение
  while (rightCell < index + radius && (rightCell + 1) % 8 !== 0) {
    rightCell += 1;
  }

  // Строка
  for (let i = leftCell; i <= rightCell; i += 1) {
    allowableSteps.add(i);
  }

  // Столбец
  for (let i = topCell; i <= bottomCell; i += 8) {
    allowableSteps.add(i);
  }

  // Верхняя левая диагональ
  for (let i = index; i >= (index - radius * 9); i -= 9) {
    allowableSteps.add(i);
    if (i % 8 === 0 || (i - 8) < 0) break;
  }

  // Правая нижняя диагональ
  for (let i = index; i <= (index + radius * 9); i += 9) {
    allowableSteps.add(i);
    if ((i + 1) % 8 === 0 || (i + 8) > 64) break;
  }

  // Правая верхняя диагональ
  for (let i = index; i >= (index - 7 * radius); i -= 7) {
    allowableSteps.add(i);
    if ((i + 1) % 8 === 0 || (i - 7) < 0) break;
  }

  // Нижняя левая диагональ
  for (let i = index; i <= (index + radius * 7); i += 7) {
    allowableSteps.add(i);
    if (i % 8 === 0 || (i + 7) >= 64) break;
  }
  return [...allowableSteps].filter((num) => num !== index);
}

/**
 * Считает радиус атаки
 * @param {*} index - Номер текущей ячейки
 * @param {*} radius - Радиус атаки
 * @returns
 */
export function getAvailableAttack(index, radius) {
  const allowableAttack = new Set();
  let leftCell = index;
  let rightCell = index;
  let startCell = null;

  // Левое значение
  while (leftCell > index - radius && leftCell % 8 !== 0) {
    leftCell -= 1;
  }
  // Правое значение
  while (rightCell < index + radius && (rightCell + 1) % 8 !== 0) {
    rightCell += 1;
  }
  // Общее
  startCell = leftCell;
  while (startCell <= rightCell) {
    let topValues = startCell;
    let bottomValues = startCell;
    allowableAttack.add(startCell);
    // Верхнее значение
    while (topValues > startCell - radius * 8 && topValues - 8 >= 0) {
      topValues -= 8;
      allowableAttack.add(topValues);
    }

    // Нижнее значение
    while (bottomValues < startCell + radius * 8 && bottomValues + 8 < 64) {
      bottomValues += 8;
      allowableAttack.add(bottomValues);
    }
    startCell += 1;
  }
  return [...allowableAttack];
}
