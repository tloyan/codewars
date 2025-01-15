String.prototype.toAlternatingCase = function () {
  return this.split('').map((e) => {
    if (e == e.toUpperCase())
      return e.toLowerCase();
    return e.toUpperCase();
  }).join('');
}