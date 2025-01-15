function formatDuration (seconds) {
  if (seconds == 0)
    return 'now';
  const y = Math.floor(seconds / (60 * 60 * 24 * 365)) % 365;
  const d = Math.floor(seconds / (60 * 60 * 24)) % 365;
  const h = Math.floor(seconds / (60 * 60)) % 24;
  const m = Math.floor(seconds / 60) % 60;
  const s = seconds % 60;
  let n = [y, d, h, m, s].filter((v) => v != 0).length;
  
  console.log(2);
  let template =
      (y ? ` ${y} year${y > 1 ? 's' : '' }${ n-- == 2 ? ' and' : ','}` : '')
    + (d ? ` ${d} day${d > 1 ? 's' : '' }${ n-- == 2 ? ' and' : ','}` : '')
    + (h ? ` ${h} hour${h > 1 ? 's' : '' }${ n-- == 2 ? ' and' : ','}` : '')
    + (m ? ` ${m} minute${m > 1 ? 's' : '' }${ n-- == 2 ? ' and' : ','}` : '')
    + (s ? ` ${s} second${s > 1 ? 's' : '' }` : '');
  return template.trim().replace(/(,$)/, '');
}
