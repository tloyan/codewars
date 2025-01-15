function updateLight(current) {
  const states = ['green', 'yellow', 'red'];
  if (current == 'red')
    return states[0];
  return states[states.indexOf(current) + 1];
}