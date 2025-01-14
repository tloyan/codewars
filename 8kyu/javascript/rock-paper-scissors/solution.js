const rps = (p1, p2) => {
  const rules = { rock: 'paper', paper: 'scissors', scissors: 'rock' };
  if (p1 == p2) return 'Draw!';
  if (p1 == rules[p2]) return 'Player 1 won!';
  return 'Player 2 won!';
};