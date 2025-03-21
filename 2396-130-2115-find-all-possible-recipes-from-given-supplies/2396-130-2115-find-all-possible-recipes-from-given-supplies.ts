function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
  const canMake = new Set(supplies);
  const recpMap = recipes.reduce((map, s, i) => map.set(s, i), new Map());
  const seen = new Set();

  const dfs = (recp: string) => {
    if (canMake.has(recp)) return true;
    const i = recpMap.get(recp);
    if (i === undefined || seen.has(recp)) return false;
    return Boolean(seen.add(recp) && ingredients[i].every((ing) => dfs(ing)) && canMake.add(recp));
  };

  return recipes.filter((r) => dfs(r));
};