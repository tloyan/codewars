function betterThanAverage(classPoints, yourPoints) {
  const average = classPoints.reduce((acc, val) => acc + val, 0) / classPoints.length;
  if (yourPoints > average)
    return true;
  return false;
}
