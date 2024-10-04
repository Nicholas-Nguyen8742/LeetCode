/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
  skill.sort((a, b) => a - b);

  let teamChemistry = 0;
  const totalSkill = skill[0] + skill[skill.length - 1];

  while (skill.length) {
    const firstEl = skill.shift();
    const lastEl = skill.pop();

    if (totalSkill !== (firstEl + lastEl)) {
      return -1;
    }

    teamChemistry += (firstEl * lastEl)
  }

  return teamChemistry;
};