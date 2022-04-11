// Генератор случайных номеров для Игрока/Компа (левые/правые два столбца)
function startField(player) {
  const boardSize = 8;
  const cellsCount = boardSize ** 2 - 1;
  const validateCells = [];
  const startCell = (player === 'user') ? 0 : boardSize - 2;
  for (let i = startCell; i <= cellsCount; i += boardSize) {
    validateCells.push(i, i + 1);
  }
  //* Массив номеров доступных полей
  // return validateCells;

  //* Для случайного номера ячейки
  const randomIndex = Math.floor(Math.random() * validateCells.length);
  return validateCells[randomIndex];
}

// console.log(startField('user'));
// console.log(startField('comp'));
