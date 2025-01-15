function warnTheSheep(queue) {
  const reversed_queue = queue.reverse();
  if (reversed_queue[0] == 'wolf')
    return 'Pls go away and stop eating my sheep';
  for (let i = 0; i < queue.length; i++) {
    if (reversed_queue[i] == 'wolf')
      return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
  }
}