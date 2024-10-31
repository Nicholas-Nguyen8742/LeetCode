function minimumTotalDistance(robot: number[], factory: number[][]): number {
  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);

  const factoryPositions = [];
  for (const [position, capacity] of factory) {
    for (let i = 0; i < capacity; i++) {
      factoryPositions.push(position);
    }
  }

  const robotCount = robot.length;
  const factoryCount = factoryPositions.length;
  let nextDist = new Array(factoryCount + 1).fill(0);
  let current = new Array(factoryCount + 1).fill(0);

  for (let i = robotCount - 1; i >= 0; i--) {
    if (i !== robotCount - 1) {
      nextDist[factoryCount] = 1e12;
    }

    current[factoryCount] = 1e12;

    for (let j = factoryCount - 1; j >= 0; j--) {
      const assign = Math.abs(robot[i] - factoryPositions[j]) + nextDist[j + 1];
      const skip = current[j + 1];
      current[j] = Math.min(assign, skip);
    }

    nextDist = current.slice();
  }

  return current[0];
};