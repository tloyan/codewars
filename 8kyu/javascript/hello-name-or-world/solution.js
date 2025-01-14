function hello(name) {
  if (!name || name.length == 0)
    return 'Hello, World!';
  return `Hello, ${name[0].toUpperCase()}${name.toLowerCase().slice(1)}!`;
}