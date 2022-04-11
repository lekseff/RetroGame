import { getAvailableAttack, getAvailableDistance } from './generators';
import GameController from './GameController';

export default function step(teams) {
  // console.log(teams);
  const computerTeams = teams.filter((member) => member.character.player === 'computer');
  const userTeams = teams.filter((member) => member.character.player === 'user');
  //
  computerTeams.forEach((compUnit) => {
    const availableAttack = getAvailableAttack(compUnit.position, compUnit.character.attackRadius);
    userTeams.forEach((userUnit) => {
      if (availableAttack.includes(userUnit.position)) {
        console.log(compUnit, ' - может атаковать - ', userUnit);
      } else {
        // console.log(compUnit);
      }
    });
  });
  // console.log(computerTeams);
}

function getPositions(team) {
  const positions = [];
  team.forEach((member) => {
    positions.push(member.position);
  });
  return positions;
}
