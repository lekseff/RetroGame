const characteristicsOfHeroes = {
  Bowman: {
    type: 'bowman',
    attack: 25,
    defence: 25,
    player: 'user',
    stepsRadius: 2,
    attackRadius: 2,
  },
  Daemon: {
    type: 'daemon',
    attack: 10,
    defence: 40,
    player: 'computer',
    stepsRadius: 1,
    attackRadius: 4,
  },
  Magician: {
    type: 'magician',
    attack: 10,
    defence: 40,
    player: 'user',
    stepsRadius: 1,
    attackRadius: 4,
  },
  Swordsman: {
    type: 'swordsman',
    attack: 40,
    defence: 10,
    player: 'user',
    stepsRadius: 4,
    attackRadius: 1,
  },
  Undead: {
    type: 'undead',
    attack: 40,
    defence: 10,
    player: 'computer',
    stepsRadius: 4,
    attackRadius: 1,
  },
  Vampire: {
    type: 'vampire',
    attack: 25,
    defence: 25,
    player: 'computer',
    stepsRadius: 2,
    attackRadius: 2,
  },
};

export default characteristicsOfHeroes;
