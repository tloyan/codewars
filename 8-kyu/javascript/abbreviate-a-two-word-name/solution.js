function abbrevName(name) {
  const fullname = [...name.toUpperCase().split(' ')];
  return `${fullname[0][0]}.${fullname[1][0]}`;
}