import Character from '../Character';

test('Creating object Character', () => {
  function fn() {
    const instance = new Character();
  }
  expect(fn).toThrowError('Запрещено создавать объекты базового класса Character!');
});
