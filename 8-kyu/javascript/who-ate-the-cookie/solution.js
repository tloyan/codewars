function cookie(x) {
  const suspect = typeof x != 'string' ? typeof x != 'number' ? 'the dog' : 'Monica' : 'Zach';
  return `Who ate the last cookie? It was ${suspect}!`
}