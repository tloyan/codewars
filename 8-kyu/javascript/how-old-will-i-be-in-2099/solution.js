function calculateAge(birth, years) {
  const diff = (birth - years);
  if (diff == 0)
    return 'You were born this very year!';
  if (diff > 0)
    return `You will be born in ${diff} year${diff > 1 ? 's' : ''}.`;
  return `You are ${Math.abs(diff)} year${diff < -1 ? 's' : ''} old.`;
}

